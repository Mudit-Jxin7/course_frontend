import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { adminEmailState } from "../store/selectors/adminEmail";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

// ... (the rest of your code)

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
  const email = useRecoilValue(adminEmailState);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items to display per page

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
        setLoading(false); // Set loading to false in case of an error
      }
    }

    fetchCourses();
  }, []); // Removed 'courses' and 'setCourses' from the dependencies array

  if (loading) return <>Loading...</>;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change the current page
  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <center className="text-4xl font-medium mt-6">Courses</center>
      {email ? <SearchBar /> : <></>}

      <div className="grid grid-cols-3 mx-12 items-center justify-center">
        {currentItems.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>

      {/* Render pagination component */}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={courses.length}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Cards;
