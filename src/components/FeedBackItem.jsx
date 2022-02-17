import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedBackItem({ item,handledelete }) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>handledelete(item.id)}>
        <FaTimes color="purple " />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
