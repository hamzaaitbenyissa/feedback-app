import { createContext, useState } from "react";
import { v1 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([ ]);

  const handledelete = (id) => {
    setfeedback(feedback.filter((item) => item.id != id));
  };

  const handleadd = (rating1, feed) => {
    const newfeed = {
      id: v1(),
      rating: rating1,
      text: feed,
    };
    setfeedback([newfeed, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        handleadd,
        handledelete,
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
