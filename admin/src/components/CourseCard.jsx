import ButtonSm from "../components/Button/ButtonSm";

const CourseCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 m-4 w-80 relative overflow-hidden transform transition-transform ease-in duration-300 hover:scale-105">
      <div className="flex flex-col items-center justify-center h-60">
        <img
          src="https://courseselling28.s3.eu-north-1.amazonaws.com/ERAxd8gl1Eg-SD.jpg"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-2">
          Complete Web3 Bootcamp to get you a High Paying JOB in 2023
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          This video is the first part of the complete Web3 Bootcamp
        </p>
        <div className="flex justify-around items-center">
          <p className="text-lg font-semibold text-indigo-700">$79</p>
          <ButtonSm title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
