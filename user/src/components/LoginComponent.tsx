import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { adminState } from "../store/atoms/admin";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const navigate = useNavigate();
  const setAdmin = useSetRecoilState(adminState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const requestData = {
        email,
        password,
      };

      // Send the POST request without manually setting Content-Length
      const response = await axios.post(
        "http://localhost:4000/user/login",
        requestData
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      setAdmin({
        adminEmail: email,
        isLoading: false,
      });

      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/feed");
      }, 500);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
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
            <form onSubmit={handleSubmit}>
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
              >
                Login
              </button>
            </form>
            <Link to="/signin">
              {" "}
              <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover-bg-blue-600 focus:outline-none">
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
