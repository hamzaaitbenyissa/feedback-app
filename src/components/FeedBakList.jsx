import React from "react";
import FeedBackItem from "./FeedBackItem";

function FeedBackList({ feedBacks,handledelete }) {

  
  return (
    <div className="feedback-list">
      {
      feedBacks.map((item) => (
        <FeedBackItem handledelete={handledelete} key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
