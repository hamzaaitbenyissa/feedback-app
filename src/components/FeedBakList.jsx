import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedBackItem from "./FeedBackItem";

function FeedBackList() {

  const {feedback}=useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div key={item.id} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
            <FeedBackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedBackList;
