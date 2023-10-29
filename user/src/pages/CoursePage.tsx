import { useRecoilValue } from "recoil";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseDetail from "../components/CourseDetail";
import Reviews from "../components/Reviews";
import { adminEmailState } from "../store/selectors/adminEmail";

const CoursePage = () => {
  const email = useRecoilValue(adminEmailState);

  if (!email) {
    window.location.href = "/";
    return null;
  }

  return (
    <>
      <Navbar />
      <CourseDetail />
      <Reviews />
      <div className="w-full bg-slate-200 h-0.5 mt-12"></div>
      <Footer />
    </>
  );
};

export default CoursePage;
