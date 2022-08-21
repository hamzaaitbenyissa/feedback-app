import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v1 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [feedback, setfeedback] = useState([]);
  const [isloading, setisLoading] = useState(true)


  useEffect(() => {
    fetch("/feedbacks")
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

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("/feedbacks/" + id, { method: 'DELETE' })
          .then(
            (res) => {
              res.json().then(
                (result) => {
                  setfeedback(feedback.filter((item) => item.id !== id));
                }
              )
            },
            (error) => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            }
          )
      }
    })


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

    fetch("/feedbacks/", requestOptions)
      .then(
        (res) => {
          res.json().then(
            (result) => {
              setfeedback([newfeed, ...feedback]);
            }
          )
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
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

    fetch("/feedbacks/" + id, requestOptions)
      .then(
        (res) => {
          res.json().then(
            (result) => {
              setfeedback(feedback.map((item) => (item.id === id ? newfeed : item)));
            }
          )
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
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
