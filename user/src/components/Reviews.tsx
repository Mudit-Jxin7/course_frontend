import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Review {
  _id: string;
  user: string;
  text: string;
}

const Reviews = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/course/getreview/${id}`
        );
        setReviews(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [id]);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const loadMore = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="w-full px-4">
        <center className="text-4xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </center>

        <ul>
          {reviews.slice(0, visibleReviews).map((review) => (
            <li
              key={review._id}
              className="bg-white rounded-2xl p-4 my-4 shadow"
            >
              <div className="text-lg font-semibold text-indigo-600">
                {review.user}
              </div>
              <p className="text-gray-600">{review.text}</p>
            </li>
          ))}
        </ul>

        {visibleReviews < reviews.length && (
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-4"
            onClick={loadMore}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
