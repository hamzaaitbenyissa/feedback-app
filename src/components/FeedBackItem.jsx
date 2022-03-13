import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackItem({ item }) {
  const { handledelete, editfeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handledelete(item.id)}>
        <FaTimes color="purple " />
      </button>

      <button className="edit" onClick={() => editfeedback(item)}>
        <FaEdit color="purple " />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
