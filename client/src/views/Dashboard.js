import React from "react";
import { PostContext } from "../contexts/PostContext";
import { useContext, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Card, Col, Row, Button } from "react-bootstrap";
import SinglePost from "../components/layout/SinglePost";
const Dashboard = () => {
  const {
    postState: { post, postLoading },
    getPosts,
  } = useContext(PostContext);
  //Start :Get all posts
  const posts = useEffect(() => getPosts, []);
  console.log(getPosts());
  let body;
  if (postLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animations="border" variant="info"></Spinner>
      </div>
    );
  } else if (posts.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi, post something</Card.Header>
          <Card.Body>
            <Card.Title>
              <Card.Text>
                Click the button bellow to track syour account
              </Card.Text>
              <Button></Button>
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <Row className="row-cols-1 row-cols-3 g-4 mx-auto mt-3 ">
          {posts.maps((post) => {
            <Col key="post._id" className="my-2">
              <SinglePost post={post}></SinglePost>
            </Col>;
          })}
        </Row>
      </>
    );
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
