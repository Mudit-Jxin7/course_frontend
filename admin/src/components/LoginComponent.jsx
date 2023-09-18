import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        email,
        password,
      };

      const response = await axios.post(
        "http://localhost:4000/admin/login",
        requestData
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/feed");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-row justify-start mr-16">
      <div className="flex flex-col items-center">
        <img src="../../assets/157.png" alt="NA" />
      </div>
      <div>
        <div className="min-h-screen flex items-center justify-center w-full">
          <div className="bg-white p-8 rounded shadow-2xl w-96">
            <center className="text-2xl font-semibold mb-4">Login</center>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none my-8"
                onClick={handleSubmit}
              >
                Login
              </button>
            </form>
            <Link to="/sign">
              {" "}
              <button
                to="/sign"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Create An Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
