import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-center h-1/4 my-6">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl text-indigo-600 font-bold">AcademeX</h2>
          <center className="text-sm">
            Discover the power of knowledge with our diverse range of courses
            designed to transform your skills and open new doors in your
            journey.
          </center>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-3xl text-indigo-600 font-bold">Navigate</h2>
          <Link href={"/"} className="text-sm">
            Home
          </Link>
          <Link href={"/"} className="text-sm">
            Contact
          </Link>
          <Link href={"/"} className="text-sm">
            About
          </Link>
        </div>

        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl text-indigo-600 font-bold">Socials</h2>

          <div className="m-4 flex justify-center items-center text-2xl gap-4">
            <Link target="_blank">
              <AiOutlineGithub />
            </Link>
            <Link target="_blank">
              {" "}
              <AiOutlineTwitter />
            </Link>
            <Link href={"/"}>
              {" "}
              <AiOutlineYoutube />
            </Link>
            <Link href={"/"}>
              <AiOutlineInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
