import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <div className="w-full bg-slate-200 h-0.5 mt-12"></div>
      <Footer />
    </>
  );
};

export default Home;
