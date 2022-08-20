import { createContext, useEffect, useState } from "react";
import { v1 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setfeedback] = useState([]);
  const [isloading, setisLoading] = useState(true)


  useEffect(() => {
    fetch("http://localhost:5000/feedbacks")
      .then(
        (res) => {
          res.json()
            .then(
              (result) => {
                setTimeout(() => {
                  setfeedback(result)
                  setisLoading(false)
                }, 1000);

              }
            )
        },
        (error) => {
          console.log(error)
        }
      )
  }, []);



  const handledelete = (id) => {
    fetch("http://localhost:5000/feedbacks/" + id, { method: 'DELETE' })
      .then(
        (res) => {
          res.json().then(
            (result) => {
              setfeedback(feedback.filter((item) => item.id !== id));
              alert("feedback added with success")
              console.log("feedback deleted with success");
              console.log(result)
            }
          )
        },
        (error) => {
          console.log("oooops there is an error !");
          console.log(error)
        }
      )
  };



  // handle add action
  const handleadd = (rating1, feed) => {
    const newfeed = {
      id: v1(),
      rating: rating1,
      text: feed,
    };

    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newfeed)
    };

    fetch("http://localhost:5000/feedbacks/", requestOptions)
      .then(
        (res) => {
          res.json().then(
            (result) => {
              alert("feedback added with success")
              console.log("feedback added with success");
              console.log(result)
              setfeedback([newfeed, ...feedback]);
            }
          )
        },
        (error) => {
          console.log("oooops there is an error !");
          console.log(error)
        }
      )
  };

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // handle update action
  const handleupdate = (id, updateditem) => {
    const newfeed = {
      id: id,
      rating: updateditem.rating,
      text: updateditem.Text,
    };

    let requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newfeed)
    };

    fetch("http://localhost:5000/feedbacks/" + id, requestOptions)
      .then(
        (res) => {
          res.json().then(
            (result) => {
              alert("feedback Updated with success")
              setfeedback(feedback.map((item) => (item.id === id ? newfeed : item)));
            }
          )
        },
        (error) => {
          alert("oooops there is an error !");
        }
      )

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
        isloading

      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
