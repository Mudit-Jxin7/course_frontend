import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signin />} />
      </Route>
    </Routes>
  );
}
