import { Avatar, List, Typography } from "antd";

const { Title } = Typography;

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

const followList = () => (
  <List
    className="followlist"
    header={
      <Title level={4} style={{ marginTop: "8px" }}>
        Who to follow?
      </Title>
    }
    itemLayout="horizontal"
    dataSource={userData}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={<div>hi</div>}
        />
      </List.Item>
    )}
  />
);

export default followList;
