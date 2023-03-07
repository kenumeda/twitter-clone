import FakeTweet from "fake-tweet";

const YourTweets = ({ tweets }) => {
  return (
    <div className="yourtweets">
      {tweets.map((tweet, index) => (
        <div key={index}>
          <FakeTweet config={tweet} />
        </div>
      ))}
    </div>
  );
};

export default YourTweets;
