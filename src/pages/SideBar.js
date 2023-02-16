import { Button, List } from "antd";
import {
  TwitterOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  MailOutlined,
  BookOutlined,
  UserOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import React from "react";

const data = [
  {
    avatar: <HomeOutlined />,
    title: "Home",
  },
  {
    avatar: <QuestionCircleOutlined />,
    title: "Explore",
  },
  {
    avatar: <BellOutlined />,
    title: "Notifications",
  },
  {
    avatar: <MailOutlined />,
    title: "Message",
  },
  {
    avatar: <BookOutlined />,
    title: "Bookmarks",
  },
  {
    avatar: <TwitterOutlined />,
    title: "Twitter Blue",
  },
  {
    avatar: <UserOutlined />,
    title: "Profile",
  },
  {
    avatar: <MoreOutlined />,
    title: "More",
  },
];

const SideBar = () => (
  <>
    <List
      header={
        <TwitterOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
      }
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Button type="text" size="large">
            {item.avatar}
            {item.title}
          </Button>
        </List.Item>
      )}
    />
    <Button block size="large" type="primary">
      Tweet
    </Button>
  </>
);

export default SideBar;
