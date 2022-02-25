import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import FeedBackItem from "./FeedBackItem";

function FeedBackList({ feedBacks, handledelete }) {
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedBacks.map((item) => (
          <motion.div key={item.id} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
            <FeedBackItem
              handledelete={handledelete}
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
