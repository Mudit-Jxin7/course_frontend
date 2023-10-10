import { useRecoilValue } from "recoil";
import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import ButtonSm from "../components/Button/ButtonSm";
import { adminEmailState } from "../store/selectors/adminEmail";

const CourseCard = ({ course }) => {
  const email = useRecoilValue(adminEmailState);
  const navigate = useNavigate();

  const descriptionWords = course.description.split(" ").slice(0, 50);
  const truncatedDescription = descriptionWords.join(" ");

  const deleteCourse = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/course/deletecourse/${id}`
      );
      if (response.status === 200) {
        toast.success("Successfully deleted course");
        console.log("Course deleted successfully");
      }
    } catch (error) {
      toast.error(error.response.data);
      console.error("Error deleting course:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 m-4 w-80 relative overflow-hidden transform transition-transform ease-in duration-300 hover:scale-105">
      <div className="flex flex-col items-center justify-center h-60">
        <img
          src={course.imageLink}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4 text-sm">{truncatedDescription}</p>
        <div className="flex justify-around items-center">
          {email ? (
            <>
              <button onClick={() => navigate(`/update/${course._id}`)}>
                <ButtonSm title="Update" />
              </button>
              <button onClick={() => deleteCourse(course._id)}>
                {" "}
                <ButtonSm title="Delete" />
              </button>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold text-indigo-700">
                ${course.price}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CourseCard;
