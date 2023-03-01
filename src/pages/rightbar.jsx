import React from "react";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import { Input, Typography } from "antd";
import Widgets from "./widgets";
const { Title } = Typography;

const tweetData = [
  {
    title: "Elon Musk",
    tweet: "This is a the best water bottle ever!",
  },
  {
    title: "Champions League",
    tweet: "This is a tweet",
  },
  {
    title: "Better Call Saul",
    tweet: "Is Will Oakely the one?",
  },
  {
    Trending: "",

    title: "Trending in Albuquerque",
    tweet: "New !",
  },
];

const RightBar = () => (
  <div className="rightbar">
    <Space direction="vertical" size="large">
      <Input
        className="rightbarinput"
        placeholder="Search Twitter"
        prefix={<SearchOutlined />}
      />
      <List
        className="list"
        header={
          <Title level={5} style={{ marginTop: "8px" }}>
            What's happening
          </Title>
        }
        footer={
          <div style={{ height: 20, display: "flex", alignItems: "center" }}>
            <a>Show More</a>
          </div>
        }
        bordered
        dataSource={tweetData}
        renderItem={(item) => (
          <List.Item
            actions={[<MoreOutlined style={{ transform: "rotate(90deg)" }} />]}
          >
            <List.Item.Meta title={item.title} description={item.tweet} />
          </List.Item>
        )}
      />
      <Widgets />
    </Space>
  </div>
);

export default RightBar;
