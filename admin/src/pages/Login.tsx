import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginComponent from "../components/LoginComponent";

const Login = () => {
  return (
    <>
      <Navbar />
      <LoginComponent />
      <div className="w-full bg-slate-200 h-0.5 mt-12"></div>
      <Footer />
    </>
  );
};

export default Login;
