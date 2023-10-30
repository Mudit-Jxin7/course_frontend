import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import InitUser from "./InitUser";
import Signin from "./pages/Signin";
import Feed from "./pages/Feed";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CoursePage from "./pages/CoursePage";
import VideoPage from "./pages/VideoPage";
import PurchasedCourse from "./pages/PurchasedCourse";

export default function App() {
  return (
    <RecoilRoot>
      <div>
        <InitUser />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/purchased" element={<PurchasedCourse />} />
            <Route path="/video/:id" element={<VideoPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </RecoilRoot>
  );
}
