import { useRecoilValue } from "recoil";
import ButtonSm from "../components/Button/ButtonSm";
import { adminEmailState } from "../store/selectors/adminEmail";

const CourseCard = ({ course }) => {
  const email = useRecoilValue(adminEmailState);

  const descriptionWords = course.description.split(" ").slice(0, 50);
  const truncatedDescription = descriptionWords.join(" ");

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
              <ButtonSm title="Update" />
              <ButtonSm title="Delete" />
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

export default CourseCard;
