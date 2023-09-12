import { Link } from "react-router-dom";
import ButtonSm from "./Button/ButtonSm";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around mt-4 shadow-xl h-16">
      <Link to="/">
        <h1 className="text-indigo-600 text-4xl font-bold">AcademeX</h1>
      </Link>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-purple-500 rounded-2xl p-2 w-64 mb-6"
      />
      <div className="flex flex-row space-x-3 mb-6">
        <Link to="/login">
          <ButtonSm title="Log in" />
        </Link>
        <Link to="/sign">
          <ButtonSm title="Sign in" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
