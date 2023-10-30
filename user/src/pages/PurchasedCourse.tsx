import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PurchasedCard from "../components/PurchasedCard";
import { adminEmailState } from "../store/selectors/adminEmail";

function PurchasedCourse() {
  const email = useRecoilValue(adminEmailState);
  const navigate = useNavigate();

  if (!email) {
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <PurchasedCard />
      <Footer />
    </>
  );
}

export default PurchasedCourse;
