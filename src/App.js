import React from "react";

import Feed from "./Pages/Feed";
import LeftBar from "./Pages/LeftBar";
import RightBar from "./Pages/RightBar";
import "./App.css";
import { Col, Row } from "antd";

const App = () => {
  const colStyle = { flex: 0 };

  return (
    <>
      <Row justify="center" gutter={[8, 8]}>
        <Col sm={10} md={7} lg={7} className="left-bar-col">
          <LeftBar />
        </Col>

        <Col sm={14} md={10} lg={10}>
          <Feed />
        </Col>

        <Col sm={10} md={7} lg={7} className="right-bar-col">
          <RightBar />
        </Col>
      </Row>
    </>
  );
};

export default App;
