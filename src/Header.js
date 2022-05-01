import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Button, Divider, Icon } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <Divider orientation="center"></Divider> */}
      <Row justify="space-evenly" style={{ marginTop: 20 }}>
        <Col>
          <Link to="/">
            <Button>About</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/tech">
            <Button>Tech</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/music">
            <Button>Music</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/cycling">
            <Button>Cycling</Button>
          </Link>
        </Col>
      </Row>
      <Divider orientation="center"></Divider>
    </>
  );
};

export default Header;
