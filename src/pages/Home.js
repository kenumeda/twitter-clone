import { Avatar, Button, Card, Input, Switch } from "antd";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import NewsFeed from "./NewsFeed";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

const tabList = [
  {
    key: "tab1",
    tab: "Following",
  },
  {
    key: "tab2",
    tab: "For You",
  },
];

const Home = () => {
  const [activeTabKey1, setActiveTabKey1] = useState("tab1");
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
    <>
      <Card
        title="Home"
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        <Card>
          <div style={{ display: "flex" }}>
            <Avatar icon={<UserOutlined />} />
            <Input placeholder="What's Happening?" bordered={false} />{" "}
          </div>
          <Button type="primary">Tweet</Button>
        </Card>
        <Switch>
          <Route exact path="/home/tab1">
            <NewsFeed />
          </Route>
          <Route exact path="/home/tab2">
            <TabContent2 />
          </Route>
        </Switch>
      </Card>
    </>
  );
};
export default Home;
