import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import ButtonSm from "./Button/ButtonSm";
import { adminEmailState } from "../store/selectors/adminEmail";
import { isAdminLoading } from "../store/selectors/isAdminLoading";
import { adminState } from "../store/atoms/admin";

const Navbar = () => {
  const email = useRecoilValue(adminEmailState);
  const loading = useRecoilValue(isAdminLoading);
  const setAdmin = useSetRecoilState(adminState);
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-around mt-4 shadow-xl h-16">
      <h1 className="text-indigo-600 text-4xl font-bold">AcademeXAdmin</h1>

      <input
        type="text"
        placeholder="Search"
        className="border-2 border-purple-500 rounded-2xl p-2 w-64 mb-6"
      />
      <div className="flex flex-row space-x-3 mb-6">
        {!loading && email ? (
          <>
            <Link to="/create">
              <ButtonSm title="Create" />
            </Link>
            <Link to="/">
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setAdmin({
                    isLoading: false,
                    adminEmail: null,
                  });
                  navigate("/");
                }}
              >
                <ButtonSm title="Logout" />
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <ButtonSm title="Log in" />
            </Link>
            <a
              href="https://github.com/Mudit-Jxin7/course_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonSm title="Github" />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
