import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [Text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const { handleadd, feedbackEdit,handleupdate} = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setBtnDisabled(false);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (Text === "") {
      setBtnDisabled(true);
      setMessage("");
    } else if (Text.trim().length < 3) {
      setBtnDisabled(true);
      setMessage("Review should be at least 4 characters");
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (feedbackEdit.edit===true) {
      handleupdate(feedbackEdit.item.id,{rating,Text})
    }
    else {
      handleadd(rating, Text);
    }
    setText("");
    setBtnDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={submit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your review"
            value={Text}
          />
          <Button isDisabled={btnDisabled} version="secondary" type="submit">
            Submit
          </Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
