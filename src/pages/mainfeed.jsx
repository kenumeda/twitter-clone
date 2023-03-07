import React, { useState } from "react";
import { Avatar, Button, Card, Input, Tabs, message } from "antd";
import NewsFeed from "./NewsFeed";
import YourTweets from "./YourTweets";

const MainFeed = () => {
  const [tweets, setTweets] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      message.error("Please enter some text before submitting the tweet.");

      return;
    }
    const newTweet = {
      user: {
        nickname: "bettercallsaul",
        name: "",
        avatar:
          "https://pbs.twimg.com/profile_images/378800000470304954/8eadbe17cfe4a3ec5771089778a09113_400x400.jpeg",
        verified: false,
        locked: false,
      },
      display: "default",
      text: inputValue,
      image: "",
      date: new Date().toLocaleString(),
      app: "Twitter for Web",
      retweets: 0,
      quotedTweets: 0,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
    setInputValue("");
  };

  return (
    <>
      <Card title="Home" className="feed">
        <div className="tweetbox">
          <Avatar
            size="large"
            icon={
              <img
                src="https://pbs.twimg.com/profile_images/378800000470304954/8eadbe17cfe4a3ec5771089778a09113_400x400.jpeg"
                alt="avatar"
              />
            }
          />
          <form onSubmit={handleSubmit} className="form">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What's happening Saul?"
              bordered={false}
            />
            <Button
              className="tweetbutton"
              type="primary"
              onClick={handleSubmit}
            >
              Tweet
            </Button>
          </form>
        </div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="NewsFeed" key="1">
            <NewsFeed />
          </Tabs.TabPane>
          <Tabs.TabPane tab="YourTweets" key="2">
            <YourTweets tweets={tweets} />
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </>
  );
};

export default MainFeed;
