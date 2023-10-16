import { Link } from "react-router-dom";
import ButtonLg from "./Button/ButtonLg";

const Hero = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col mt-44 ml-16">
        <h1 className="text-5xl font-bold">
          Unlock <span className="text-indigo-600">Your</span>
        </h1>
        <h1 className="text-5xl font-bold">
          <span className="text-indigo-600">Learning</span> Potential
        </h1>
        <p className="text-lg my-6">
          Discover the power of knowledge with our diverse range of <br />
          courses designed to transform your skills and open new doors in your
          journey.
        </p>
        <div className="flex flex-row space-x-3 mt-2">
          <Link to="/login">
            <ButtonLg title="Log in" />
          </Link>
          <Link to="/signin">
            <ButtonLg title="Sign in" />
          </Link>
        </div>
      </div>
      <div>
        <img src="../../assets/62.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
