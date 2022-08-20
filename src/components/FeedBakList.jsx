import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedBackItem from "./FeedBackItem";
import Spinner from "./shared/Spinner";

function FeedBackList() {
  const { feedback, isloading } = useContext(FeedbackContext)
  if ((!feedback || feedback.length === 0) && !isloading) {
    return <p>No Feedback Yet</p>
  }

  return (

    isloading ? <Spinner></Spinner> :
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
