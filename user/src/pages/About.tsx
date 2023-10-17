import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            About Academex
          </h2>
          <p className="text-gray-600">
            Academex is a platform dedicated to providing high-quality online
            courses from industry experts. Our mission is to make learning
            accessible and convenient for everyone. With a wide range of courses
            and experienced instructors, we're here to help you achieve your
            learning goals.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
