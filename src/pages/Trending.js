import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";

import { Input } from "antd";

const data = [
  {
    title: "Elon Musk",
    description: "This is a description",
  },
  {
    title: "Champions League",
    description: "This is a description",
  },
  {
    title: "Australia",
    description: "This is a description",
  },
  {
    title: "Ant Design Title 1",
    description: "This is a description",
  },
];

const userData = [
  {
    title: "Elon Musk",
    description: "I am Twitter",
  },
  {
    title: "Bottle of water",
    description: "Water4ever",
  },
];

const Trending = () => (
  <div
    style={{
      padding: "0px 16px",
      width: "300px",
    }}
  >
    <Space direction="vertical" size="small">
      <Input
        placeholder="Search Twitter"
        prefix={<SearchOutlined />}
        style={{ backgroundColor: "#fafafa" }}
      />
      <List
        style={{ backgroundColor: "#fafafa" }}
        size="large"
        header={<div>What's Happening</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={<a href="https://ant.design">{item.description}</a>}
            />
          </List.Item>
        )}
      />

      <List
        style={{ backgroundColor: "#fafafa" }}
        itemLayout="horizontal"
        dataSource={userData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
            />
          </List.Item>
        )}
      />
    </Space>
  </div>
);

export default Trending;
