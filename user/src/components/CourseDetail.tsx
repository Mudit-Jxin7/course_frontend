import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";

import ButtonLg from "./Button/ButtonLg";
import Loading from "./Loading";
import { discounts } from "../constants/index";
import { adminEmailState } from "../store/selectors/adminEmail";

const CourseDetail = () => {
  const [course, setCourse] = useState<{
    title?: string;
    description?: string;
    imageLink?: string;
    instructor?: string;
    price?: number;
    language?: string;
    courseContent?: string;
    prerequisite?: string;
  } | null>(null);
  const [hasPurchased, setHasPurchased] = useState<boolean>(false);
  const { id } = useParams();
  const email = useRecoilValue(adminEmailState);
  const navigate = useNavigate();
  const randomIndex = Math.floor(Math.random() * discounts.length);

  const selectedDiscount = discounts[randomIndex];

  useEffect(() => {
    axios
      .get(`http://localhost:4000/course/getcourse/${id}`)
      .then((response) => {
        setCourse(response.data.course);
      })
      .catch((error) => {
        console.error("Failed to fetch course details", error);
      });
  }, [id]);

  useEffect(() => {
    if (!email) {
      navigate("/");
    } else {
      axios
        .get(`http://localhost:4000/payment/haspurchased/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.hasPurchased) {
            setHasPurchased(true);
          }
        })
        .catch((error) => {
          console.error("Failed to check course purchase status", error);
        });
    }
  }, [email, navigate, id]);

  if (course === null) {
    return <Loading />;
  }

  const courseContentList = (course?.courseContent || "")
    .split(",")
    .map((content, index) => <li key={index}>{content.trim()}</li>);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51O59p6SB2vD416D36xFnCofve1xFi6LRPGgSfhyqxj19aydvfKp6sYLQmNlRtQbelWKe2C7HTGcB1yV4RWQMCDAg0075n5zHS4"
    );

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    const response = await fetch(`http://localhost:4000/payment/pay/${id}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify([course]),
    });

    const session = await response.json();

    const result = stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result) {
      if ((await result).error) {
        console.log((await result).error);
        toast.error("Payment Failed");
      } else {
        toast.success("Payment Successfull!");
      }
    }
  };

  if (!email) {
    navigate("/");
  }

  return (
    <div className="flex flex-row justify-evenly mx-6">
      <div className="bg-white mt-9 rounded-2xl shadow-2xl p-4 m-4 w-1/4 relative overflow-hidden transform transition-transform ease-in duration-300 hover:scale-105">
        <div className="flex flex-col items-center justify-center h-60">
          <img
            src={course.imageLink}
            className="w-full h-full object-cover rounded-lg"
            alt="Course Image"
          />
        </div>
        <div className="p-4 text-center">
          <h1 className="text-3xl font-semibold mb-2">{course.title}</h1>
          <p className="text-gray-600 mb-4 text-lg">
            ${course.price} | {selectedDiscount}% off
          </p>
          <div className="flex justify-around items-center flex-col space-y-6">
            <div className="text-xl font-semibold text-indigo-700">
              {course.instructor}
            </div>
            {!hasPurchased && (
              <button onClick={makePayment}>
                <ButtonLg title="Buy Course" />
              </button>
            )}
            {hasPurchased && <ButtonLg title="Purchased" />}
            <ButtonLg title="Star Course" />
            <div>
              <p>30-Day Money Back Guarantee</p>
              <p>Full Lifetime access</p>
            </div>
            <p>Share | Apply Coupon</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start w-3/6 mt-16">
        <h1 className="text-5xl font-semibold mb-2 text-black">
          {course.title}
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          {course.description}
        </p>
        <p className="text-lg text-indigo-700 font-medium">
          Instructor:{" "}
          <span className="font-thin text-lg text-black">
            {course.instructor}
          </span>
        </p>
        <p className="text-lg text-indigo-700 font-medium flex flex-row ">
          Ratings:{" "}
          <span className="font-thin text-lg text-black flex flex-row">
            4.5 Stars{" "}
            <div className="flex flex-row mt-1 ml-2 text-orange-400">
              <FaStar /> <FaStar /> <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </span>
        </p>
        <p className="text-lg text-indigo-700 font-medium">
          Language:{" "}
          <span className="font-thin text-lg text-black">
            {course.language}
          </span>
        </p>
        <p className="text-lg text-indigo-700 font-medium">
          Duration: <span className="font-thin text-lg text-black">16hrs</span>
        </p>
        <div className="text-lg text-indigo-700 font-medium">
          Course Contents:
          <ul className="list-disc ml-8 text-black font-thin">
            {courseContentList}
          </ul>
        </div>
        <p className="text-lg text-indigo-700 font-medium">
          Prerequisites:{" "}
          <span className="font-thin text-lg text-black">
            {course.prerequisite}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CourseDetail;
