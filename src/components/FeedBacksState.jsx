import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedBacksState() {

  const {feedback}=useContext(FeedbackContext)
  

  let ratingsum = () => {
   let sum = 0;
    feedback.map((item) => (sum += item.rating));
    return sum;
  };

  let avgrating = ratingsum() /feedback.length;


  if (!feedback.length) {
    return (
      <div className="feedback-stats ">
        <h4>{feedback.length} Reviews</h4>
      </div>
    );
  }
  return (
    <div className="feedback-stats ">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {avgrating}</h4>
    </div>
  );
}

export default FeedBacksState;
