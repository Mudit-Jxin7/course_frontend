import { useRecoilValue } from "recoil";

import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { adminEmailState } from "../store/selectors/adminEmail";

const Feed = () => {
  const email = useRecoilValue(adminEmailState);

  if (!email) {
    window.location.href = "/";
    return null;
  }

  return (
    <>
      <Navbar />
      <Cards />
      <Footer />
    </>
  );
};

export default Feed;
