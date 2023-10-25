import { useState } from "react";

const Reviews = () => {
  const [reviews] = useState([
    { id: 1, name: "John Doe", review: "Excellent product! I love it." },
    { id: 2, name: "Jane Smith", review: "Great quality and fast delivery." },
    { id: 3, name: "Bob Johnson", review: "Very satisfied with my purchase." },
  ]);
  return (
    <div className="bg-gray-100 py-10 ">
      <div className="w-full px-4">
        <center className="text-4xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </center>

        <ul>
          {reviews.map((review) => (
            <li
              key={review.id}
              className="bg-white rounded-2xl p-4 my-4 shadow"
            >
              <div className="text-lg font-semibold text-indigo-600">
                {review.name}
              </div>
              <p className="text-gray-600">{review.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
