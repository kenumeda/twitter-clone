import React from "react";

import "./App.css";
import { Col, Row } from "antd";
import LeftBar from "./pages/LeftBar";
import Mainfeed from "./pages/MainFeed";
import LargeWidget from "./pages/LargeWidget";
const App = () => {
  return (
    <>
      <Row
        justify="center
    "
        gutter={[8, 8]}
      >
        <Col className="left-bar-col">
          <LeftBar />
        </Col>

        <Col className="main-feed-col">
          <Mainfeed />
        </Col>

        <Col className="right-bar-col">
          <LargeWidget />
        </Col>
      </Row>
    </>
  );
};

export default App;
