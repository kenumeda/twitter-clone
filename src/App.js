import React from "react";

import "./App.css";
import { Col, Row } from "antd";
import LeftBar from "./Pages/leftbar";
import MainFeed from "./Pages/mainfeed";
import RightBar from "./Pages/rightbar";

const App = () => {
  return (
    <>
      <Row justify="center" gutter={[8, 8]}>
        <Col sm={10} md={7} lg={5} className="left-bar-col">
          <LeftBar />
        </Col>

        <Col sm={14} md={10} lg={10} className="main-feed-col">
          <div className="main-feed-container">
            <MainFeed />
          </div>
        </Col>

        <Col sm={10} md={7} lg={5} className="right-bar-col">
          <RightBar />
        </Col>
      </Row>
    </>
  );
};

export default App;
