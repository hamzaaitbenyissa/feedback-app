import { useState } from "react";
import "./App.css";
import FeedBackList from "./components/FeedBakList";
import Header from "./components/Header";
import feedBakData from "./data/feedBackData";
function App() {
  const [feedBacks, setFeedBacks] = useState(feedBakData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedBacks={feedBacks} />
      </div>
    </>
  );
}

export default App;
