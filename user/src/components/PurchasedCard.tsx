import { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { adminEmailState } from "../store/selectors/adminEmail";
import Loading from "./Loading";
import PurchasedCourseCard from "./PurchasedCourseCard";

interface Course {
  _id: string;
  title: string;
  description: string;
  imageLink: string;
  price: number;
}

const PurchasedCard = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const email = useRecoilValue(adminEmailState);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const headers = {
          Authorization: "Bearer " + localStorage.getItem("token"),
        };

        const response = await axios.get(
          "http://localhost:4000/payment/getpaidcourses",
          { headers: headers }
        );
        setCourses(response.data.courses[0]);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) return <Loading />;

  if (!email) {
    navigate("/");
  }

  return (
    <>
      <center className="text-4xl font-medium mt-6">Courses</center>

      <center className="flex justify-center items-center mx-auto">
        <div className="grid grid-cols-3 gap-24">
          {courses.map((course: Course) => (
            <PurchasedCourseCard key={course._id} course={course} />
          ))}
        </div>
      </center>
    </>
  );
};

export default PurchasedCard;
