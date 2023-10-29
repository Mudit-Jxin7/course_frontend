import ReactPlayer from "react-player";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VideoPage = () => {
  const videoUrl = "https://www.youtube.com/watch?v=YQJLNxveyKg";

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-16 w-1/2 mx-auto">
        <ReactPlayer
          url={videoUrl}
          controls={true}
          loop={true}
          width="175%"
          height="500px"
        />
        <h1 className="text-5xl my-8 font-semibold">Web Development Course</h1>
        <center className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          quibusdam nam incidunt commodi ullam eveniet dolorem quisquam suscipit
          minima voluptate qui voluptatibus, aut, iste quo cum saepe libero
          sequi non modi soluta doloremque veritatis facere deserunt!
          Blanditiis, repellat, laborum, voluptates nostrum ea recusandae ad
          earum mollitia molestiae possimus aspernatur alias.
        </center>
      </div>
      <div className="w-full bg-slate-200 h-0.5 mt-12"></div>
      <Footer />
    </>
  );
};

export default VideoPage;
