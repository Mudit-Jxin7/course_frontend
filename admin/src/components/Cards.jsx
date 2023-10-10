import axios from "axios";
import { useEffect, useState } from "react";

import CourseCard from "./CourseCard";

const Cards = () => {
  const [courses, setCourses] = useState([]);

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
  }, [courses, setCourses]);

  return (
    <>
      <center className="text-4xl font-medium mt-6">Courses</center>
      <div className="grid grid-cols-4 gap-2 mx-12">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default Cards;
