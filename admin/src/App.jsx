import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Feed from "./pages/Feed";
import CreateCourse from "./pages/CreateCourse";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signin />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<CreateCourse />} />
      </Route>
    </Routes>
  );
}
