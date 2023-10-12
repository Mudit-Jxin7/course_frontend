import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SigninComponent from "../components/SigninComponent";

const Login = () => {
  return (
    <>
      <Navbar />
      <SigninComponent />
      <div className="w-full bg-slate-200 h-0.5 mt-12"></div>
      <Footer />
    </>
  );
};

export default Login;
