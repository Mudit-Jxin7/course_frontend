import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import ButtonSm from "./Button/ButtonSm";
import { adminEmailState } from "../store/selectors/adminEmail";
import { isAdminLoading } from "../store/selectors/isAdminLoading";
import { adminState } from "../store/atoms/admin";
import ButtonLg from "./Button/ButtonLg";

const Navbar = () => {
  const email = useRecoilValue(adminEmailState);
  const loading = useRecoilValue(isAdminLoading);
  const setAdmin = useSetRecoilState(adminState);
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-around mt-4 shadow-xl h-16">
      <h1 className="text-indigo-600 text-4xl font-bold">AcademeX</h1>

      <input
        type="text"
        placeholder="Search"
        className="border-2 border-purple-500 rounded-2xl p-2 w-64 mb-6"
      />
      <div className="flex flex-row space-x-3 mb-6">
        {!loading && email ? (
          <>
            <Link to="/liked">
              <ButtonSm title="Liked" />
            </Link>
            <Link to="/purchased">
              <ButtonLg title="Purchased" />
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
            <Link to="/signin">
              <ButtonSm title="Sign in" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
