import axios from "axios";
import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { adminState } from "./store/atoms/admin.js";

const InitUser = () => {
  const navigate = useNavigate();
  const setAdmin = useSetRecoilState(adminState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get("http://localhost:4000/admin/me", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.data.email) {
          setAdmin({
            isLoading: false,
            adminEmail: response.data.email,
          });
          navigate("/feed");
        } else {
          setAdmin({
            isLoading: false,
            adminEmail: null,
          });
        }
      } catch (e) {
        setAdmin({
          isLoading: false,
          adminEmail: null,
        });
      }
    };

    init();
  }, [setAdmin]);

  return null;
};

export default InitUser;
