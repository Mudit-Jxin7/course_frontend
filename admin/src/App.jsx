import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Feed from "./pages/Feed";
import CreateCourse from "./pages/CreateCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signin />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/create" element={<CreateCourse />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}
