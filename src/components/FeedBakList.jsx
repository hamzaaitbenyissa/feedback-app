import React from "react";
import FeedBackItem from "./FeedBackItem";

function FeedBackList({ feedBacks }) {

  return (
    <div className="feedback-list">
      {
      console.log("???????????"),
      feedBacks.map((item) => (
          console.log("item  : "+ item),
        <FeedBackItem item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
