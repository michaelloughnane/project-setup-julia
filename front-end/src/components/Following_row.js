import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import Image from "react-bootstrap/Image";

function Following_row() {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col>
          {" "}
          <Image src="https://picsum.photos/300/300" />{" "}
        </Col>
        <Col>
          {" "}
          <Image src="https://picsum.photos/300/300" />{" "}
        </Col>
        <Col>
          {" "}
          <Image src="https://picsum.photos/300/300" />{" "}
        </Col>
        <Col>
          {" "}
          <Image src="https://picsum.photos/300/300" />{" "}
        </Col>
      </Row>
    </>
  );
}

export default Following_row;
