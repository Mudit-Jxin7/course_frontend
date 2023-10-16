import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SigninComponent = () => {
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const requestData = {
        email,
        password,
        name,
      };

      await axios.post("http://localhost:4000/user/register", requestData);

      toast.success("Registered successfully, Please Login!");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
          toast.error(error.response.data);
        } else {
          toast.error("An error occurred during registration.");
        }
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="flex flex-row justify-start mr-16">
      <div className="flex flex-col items-center">
        <img src="../../assets/157.png" alt="NA" />
      </div>
      <div>
        <div className="min-h-screen flex items-center justify-center w-full">
          <div className="bg-white p-8 rounded shadow-2xl w-96">
            <center className="text-2xl font-semibold mb-4">Sign In</center>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none my-8"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </form>
            <p className="mt-4 text-center">
              Have an account?{" "}
              <Link to="/login" className="text-indigo-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
