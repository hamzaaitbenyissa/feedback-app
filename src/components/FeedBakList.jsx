import React from "react";
import FeedBackItem from "./FeedBackItem";

function FeedBackList({ feedBacks }) {

  return (
    <div className="feedback-list">
      {
      feedBacks.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
