import { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedBacksState from "./components/FeedBacksState";
import FeedBackList from "./components/FeedBakList";
import Header from "./components/Header";
import feedBakData from "./data/feedBackData";
function App() {
  const [feedBacks, setFeedBacks] = useState(feedBakData);

  const handledelete = (id) => {
    window.alert("Are you sure taht you want to delete this item??");
    setFeedBacks(feedBacks.filter((item) => item.id != id));
  };

  const handleadd = (rating1, feed) => {
    console.log(feedBacks);
    const newfeed = {
      id: v1(),
      rating: rating1,
      text: feed,
    };
    feedBacks.push(newfeed)
    setFeedBacks([newfeed,...feedBacks]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleadd={handleadd} />
        <FeedBacksState feedBacks={feedBacks} />
        <FeedBackList handledelete={handledelete} feedBacks={feedBacks} />
      </div>
    </>
  );
}

export default App;
