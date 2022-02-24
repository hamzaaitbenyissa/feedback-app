import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm({handleadd}) {
  const [Text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(1);

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

  const submit=(e)=>{
    e.preventDefault();
    handleadd(rating,Text)
  }


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
