import React from "react";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import { Input, Typography } from "antd";
import SmallWidget from "./SmallWidget";

const { Title } = Typography;

const tweetData = [
  {
    title: "Breakfast king critques",
    tweet: "This is the best water ever!",
  },
  {
    title: "Nancho and Papa Varga business flourish",
    tweet: "Couldn't get better without my son",
  },
  {
    title: "Better Call Saul",
    tweet: "Is Will Oakely the one?",
  },
  {
    title: "Trending in Albuquerque",
    tweet: "New taco store opened by Lalo!",
  },
];

const LargeWidget = () => (
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
      <SmallWidget />{" "}
    </Space>
  </div>
);

export default LargeWidget;
