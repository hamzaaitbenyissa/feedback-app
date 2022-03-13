import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v1 } from "uuid";
import "./App.css";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedBacksState from "./components/FeedBacksState";
import FeedBackList from "./components/FeedBakList";
import Header from "./components/Header";
import feedBakData from "./data/feedBackData";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedBacks, setFeedBacks] = useState(feedBakData);

  const handledelete = (id) => {
    setFeedBacks(feedBacks.filter((item) => item.id != id));
  };

  const handleadd = (rating1, feed) => {
    const newfeed = {
      id: v1(),
      rating: rating1,
      text: feed,
    };
    setFeedBacks([newfeed, ...feedBacks]);
  };

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleadd={handleadd} />
                <FeedBacksState feedBacks={feedBacks} />
                <FeedBackList
                  handledelete={handledelete}
                  feedBacks={feedBacks}
                />
              </>
            }
          >
          </Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      </div>
    </BrowserRouter>
  );
}

export default App;
