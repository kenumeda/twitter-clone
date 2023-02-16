import React from "react";
import Home from "./pages/Home";
import SideBar from "./pages/SideBar";

import { Col, Layout, Row } from "antd";
import Trending from "./pages/Trending";
const { Sider, Content } = Layout;

const contentStyle = {
  lineHeight: "120px",
  color: "#fff",
  width: "600px",
};

const siderStyle = {
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#ffffff",
  width: "275px",
};
const TrendingStyle = {
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#ffffff",
};

const App = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Row>
      <Col>
        {" "}
        <Sider style={siderStyle}>
          <SideBar />
        </Sider>
      </Col>
      <Col>
        {" "}
        <Content style={contentStyle}>
          <Home />
        </Content>
      </Col>
      <Col>
        {" "}
        <Sider style={TrendingStyle}>
          <Trending />
        </Sider>
      </Col>
    </Row>
  </div>
);

export default App;
