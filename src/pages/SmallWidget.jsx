import React from "react";
import { Button, Typography } from "antd";
import { Avatar, List } from "antd";

const { Title } = Typography;

const data = [
  {
    avatar: "http://www.savewalterwhite.com/img/walter_1.jpg",
    title: "HelpMyDad",
    description: "@savewalterwhite",
    link: "http://www.savewalterwhite.com/",
  },
  {
    avatar:
      "https://i0.wp.com/auralcrave.com/wp-content/uploads/2018/09/home-slide-2.jpg?fit=915%2C515&ssl=1",
    title: "LetsSaveHuell ",
    description: "@freebaptistchurch",
    link: "http://www.freewill-baptistchurch.com/",
  },
  {
    avatar: "https://cdn.personalitylist.com/avatars/207646.png",
    title: "WilliamOakley",
    description: "@trustoakley",
    link: "https://www.oakley4defenselaw.com/",
  },
];
const SmallWidget = () => (
  <List
    className="list"
    size="small"
    header={
      <Title level={5} style={{ marginTop: "8px" }}>
        Who to follow{" "}
      </Title>
    }
    bordered
    itemLayout="horizontol"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        extra={
          <Button
            style={{
              backgroundColor: "#0f1419",
              color: "white",
              fontWeight: "bold",
              borderRadius: "9999px",
            }}
          >
            Follow
          </Button>
        }
      >
        <List.Item.Meta
          className="widgetBox"
          avatar={<Avatar src={item.avatar} />}
          title={item.title}
          description={
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.description}
            </a>
          }
        />
      </List.Item>
    )}
  />
);
export default SmallWidget;
