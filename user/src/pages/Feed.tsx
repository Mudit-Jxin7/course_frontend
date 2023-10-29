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
      <div className="flex flex-col">
        <Navbar />
        <Cards />
        <div className="w-full bg-slate-200 h-0.5 mt-12"></div>
        <Footer />
      </div>
    </>
  );
};

export default Feed;
