import { createContext, useState } from "react";
import { v1 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: 1,
      text: "this is the feedback 1",
      rating: 8,
    },
    {
      id: 2,
      text: "this is the feedback 2",
      rating: 7,
    },
  ]);

  const handledelete = (id) => {
    setfeedback(feedback.filter((item) => item.id !== id));
  };

  // handle add action
  const handleadd = (rating1, feed) => {
    const newfeed = {
      id: v1(),
      rating: rating1,
      text: feed,
    };
    setfeedback([newfeed, ...feedback]);
  };

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // handle update action
  const handleupdate = (id, updateditem) => {
    console.log(id, updateditem);
    const newfeed = {
      id: id,
      rating: updateditem.rating,
      text: updateditem.Text,
    };

    setfeedback(feedback.map((item) => (item.id === id ? newfeed : item)));
  };
  //set item to be edited
  const editfeedback = (item) => {
    setfeedbackEdit({
      item: item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        handleadd,
        handledelete,
        feedback,
        editfeedback,
        feedbackEdit,
        handleupdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
