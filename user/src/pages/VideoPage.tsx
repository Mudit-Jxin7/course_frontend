import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VideoPage = () => {
  const [course, setCourse] = useState<{
    title?: string;
    description?: string;
    videoLink?: string;
  } | null>(null);
  const { id } = useParams();

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

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-16 w-1/2 mx-auto">
        <ReactPlayer
          url={course?.videoLink}
          controls={true}
          loop={true}
          width="175%"
          height="500px"
        />
        <h1 className="text-3xl my-8 font-semibold">{course?.title}</h1>
        <center className="text-lg text-gray-700">{course?.description}</center>
      </div>
      <div className="w-full bg-slate-200 h-0.5 mt-12"></div>
      <Footer />
    </>
  );
};

export default VideoPage;
