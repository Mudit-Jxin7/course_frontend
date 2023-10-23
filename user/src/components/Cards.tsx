import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { adminEmailState } from "../store/selectors/adminEmail";
import CourseCard from "./CourseCard";
import Pagination from "./Pagination";
import Loading from "./Loading";

interface Course {
  _id: string;
  title: string;
  description: string;
  imageLink: string;
  price: number;
}

const Cards = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const email = useRecoilValue(adminEmailState);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get(
          "http://localhost:4000/course/getallcourses"
        );
        setCourses(response.data.courses);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) return <Loading />;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter courses based on the search input
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  // Function to change the current page
  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <center className="text-4xl font-medium mt-6">Courses</center>
      {email ? (
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 mt-6 mx-auto"
        />
      ) : (
        <></>
      )}
      <center className="flex justify-center items-center mx-auto">
        <div className="grid grid-cols-3 gap-24">
          {filteredCourses
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
        </div>
      </center>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredCourses.length}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Cards;
