/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRecoilValue } from "recoil";
import PropTypes from "prop-types";

import { adminEmailState } from "../store/selectors/adminEmail";
import ButtonLg from "./Button/ButtonLg";

type CourseType = {
  title: string;
  description: string;
  imageLink: string;
  _id: string;
  price: number;
};

const CourseCard = ({ course }: { course: CourseType }) => {
  const email = useRecoilValue(adminEmailState);

  const descriptionWords = course.description.split(" ").slice(0, 10);
  const truncatedDescription = descriptionWords.join(" ");

  return (
    <div className="bg-white mt-9 rounded-2xl shadow-2xl p-4 m-4 w-80 relative overflow-hidden transform transition-transform ease-in duration-300 hover:scale-105">
      <div className="flex flex-col items-center justify-center h-60">
        <img
          src={course.imageLink}
          className="w-full h-full object-cover rounded-lg"
          alt={course.title}
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4 text-sm">{truncatedDescription}...</p>
        <div className="flex justify-around items-center flex-col space-y-6">
          {email ? (
            <>
              <ButtonLg title="View Course" />
              <p className="text-lg font-semibold text-indigo-700">
                ${course.price}
              </p>
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
