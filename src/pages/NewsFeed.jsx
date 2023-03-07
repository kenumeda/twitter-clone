import React from "react";
import tweets from "./tweets.json";
import FakeTweet from "fake-tweet";

const NewsFeed = () => {
  return (
    <div className="tweets">
      {tweets.map((tweet, index) => (
        <div key={index}>
          <FakeTweet config={tweet} />
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
