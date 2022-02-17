function FeedBacksState({ feedBacks }) {

  let ratingsum = () => {
   let sum = 0;
    feedBacks.map((item) => (sum += item.rating));
    return sum;
  };

  let avgrating = ratingsum() /feedBacks.length;


  return (
    <div className="feedback-stats ">
      <h4>{feedBacks.length} Reviews</h4>
      <h4>Average Rating : {avgrating}</h4>
    </div>
  );
}

export default FeedBacksState;
