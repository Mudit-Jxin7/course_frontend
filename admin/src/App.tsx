import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import CreateCourse from "./pages/CreateCourse";
import Update from "./pages/Update";
import InitUser from "./InitUser";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <RecoilRoot>
      <div>
        <InitUser />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/create" element={<CreateCourse />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </RecoilRoot>
  );
}
