import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ButtonLg from "./Button/ButtonLg";

interface Review {
  _id: string;
  user: string;
  text: string;
}

const Reviews = () => {
  const [reviewText, setReviewText] = useState<string>("");

  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const loadMore = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/course/getreview/${id}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [id, reviewText, setReviewText]);

  const handleReviewSubmit = async () => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      await axios.post(
        `http://localhost:4000/course/review/${id}`,
        {
          text: reviewText,
        },
        config
      );

      setReviewText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="w-full px-4">
        <center className="text-4xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </center>

        <ul>
          <li className="bg-white rounded-2xl p-4 my-4 shadow">
            <div className="text-lg font-semibold text-indigo-600">
              Add Review
            </div>
            <input
              type="text"
              className="text-gray-600 border-indigo-600 border-2 rounded-md w-full mb-2"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <button onClick={handleReviewSubmit}>
              <ButtonLg title={"Add"} />
            </button>
          </li>
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
