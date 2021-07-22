import React from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import ActionButton from "./ActionButton";
const SinglePost = ({ post: { _id, status, title, description } }) => {
  let pilltype = "success";
  switch (status) {
    case "To learn": {
      pilltype = "danger";
      break;
    }
    case "Learning": {
      pilltype = "warning";
      break;
    }
    case "learned": {
      pilltype = "success";
      break;
    }
    default:
      break;
  }
  return (
    <Card className="shadow" border={pilltype}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <p className="post-title">{title}</p>
              <Badge pill variant={pilltype}>
                {status}
              </Badge>
            </Col>
            <Col className="text-right">
              <ActionButton _id={_id}></ActionButton>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text> {description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SinglePost;
