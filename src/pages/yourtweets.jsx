import FakeTweet from "fake-tweet";

const YourTweets = ({ tweets }) => {
  return (
    <div className="tweet">
      {tweets.map((tweet, index) => (
        <div key={index}>
          <FakeTweet config={tweet} />
        </div>
      ))}
    </div>
  );
};

export default YourTweets;
