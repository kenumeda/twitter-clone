import { Avatar, Button, List, Space, Typography } from "antd";
import {
  TwitterOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  MailOutlined,
  BookOutlined,
  UserOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import React from "react";

const { Text } = Typography;

const data = [
  {
    avatar: <HomeOutlined style={{ fontSize: "26px" }} />,
    title: "Home",
  },
  {
    avatar: <SearchOutlined style={{ fontSize: "26px" }} />,
    title: "Explore",
  },
  {
    avatar: <BellOutlined style={{ fontSize: "26px" }} />,
    title: "Notifications",
  },
  {
    avatar: <MailOutlined style={{ fontSize: "26px" }} />,
    title: "Message",
  },
  {
    avatar: <BookOutlined style={{ fontSize: "26px" }} />,
    title: "Bookmarks",
  },
  {
    avatar: <TwitterOutlined style={{ fontSize: "26px" }} />,
    title: "Twitter Blue",
  },
  {
    avatar: <UserOutlined style={{ fontSize: "26px" }} />,
    title: "Profile",
  },
  {
    avatar: (
      <MoreOutlined style={{ fontSize: "26px", transform: "rotate(90deg)" }} />
    ),
    title: "More",
  },
];

const LeftBar = () => {
  return (
    <>
      <List
        className="leftbar"
        header={
          <TwitterOutlined
            style={{
              fontSize: "24px",
              color: "var(--twitter-color)",
            }}
          />
        }
        footer={
          <Button
            size="large"
            type="primary"
            style={{
              backgroundColor: "var(--twitter-color",
              fontWeight: "bold",
              width: "200px",
              borderRadius: "9999px",
            }}
          >
            Tweet
          </Button>
        }
        dataSource={data}
        renderItem={(item) => (
          <div>
            <List.Item className="list-item-buttons">
              <Button
                type="text"
                size="large"
                style={{ display: "flex", alignContent: "center" }}
              >
                {item.avatar}

                {item.title}
              </Button>
            </List.Item>
          </div>
        )}
      />

      <Button className="userbutton" type="text">
        <Space>
          <Avatar src="https://pbs.twimg.com/profile_images/378800000470304954/8eadbe17cfe4a3ec5771089778a09113_400x400.jpeg" />
          <div className="user">
            <Text style={{ fontWeight: "bold" }}>James McGill</Text>
            <Text style={{ color: "grey" }}>@bettercallsaul</Text>
          </div>
          <MoreOutlined style={{ transform: "rotate(90deg)" }} />
        </Space>
      </Button>
    </>
  );
};

export default LeftBar;
