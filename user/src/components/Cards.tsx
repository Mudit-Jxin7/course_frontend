import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { adminEmailState } from "../store/selectors/adminEmail";

import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";

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

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get(
          "http://localhost:4000/course/getallcourses"
        );
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    }

    fetchCourses();
    setLoading(false);
  }, [courses, setCourses]);

  if (loading) return <>Loading...</>;

  return (
    <>
      <center className="text-4xl font-medium mt-6">Courses</center>
      {email ? <SearchBar /> : <></>}

      <div className="grid grid-cols-4 gap-2 mx-12">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default Cards;
