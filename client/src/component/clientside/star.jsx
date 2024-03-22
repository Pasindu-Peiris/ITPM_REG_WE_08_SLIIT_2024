import React, { useState } from "react";

const StarRating = ({ rating, setRating }) => {
 // const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const starStyle = {
    cursor: "pointer",
    fontSize: "30px",
  };

  return (
    <div>
      <p
        htmlFor="fullName"
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontWeight: "bold",
        }}
      >
        Rate your experience
      </p>

      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <span
            key={i}
            style={{
              ...starStyle,
              color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
            }}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};
export default StarRating;
