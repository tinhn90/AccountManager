import React from "react";
import { PostContext } from "../contexts/PostContext";
import { useContext, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Card, Col, Row, Button } from "react-bootstrap";
import SinglePost from "../components/layout/SinglePost";
import AddPostModal from "../components/layout/post/AddPostModal";
import addIcon from "../assets/plus-circle-fill.svg";
const Dashboard = () => {
  const {
    postState: { posts, postsLoading },
    getPosts,
    setShowAddPostModal,
  } = useContext(PostContext);
  //Start :Get all posts
  useEffect(() => getPosts(), []);
  let body;
  if (postsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animations="border" variant="info"></Spinner>
      </div>
    );
  } else if (posts.length === 0) {
    console.log(posts);
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi, post something</Card.Header>
          <Card.Body>
            <Card.Title>
              <Card.Text>
                Click the button bellow to track your account
              </Card.Text>
              <Button>Add balanced</Button>
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    console.log(posts);
    body = (
      <>
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3 ">
          {posts.map((post) => (
            <Col key={post._id} className="my-2">
              <SinglePost post={post} />
            </Col>
          ))}
        </Row>
        <Button
          className="btn-floating"
          onClick={setShowAddPostModal.bind(this, true)}
        >
          <img src={addIcon} alt="add-post" width="60" height="60" />
        </Button>
      </>
    );
  }
  return (
    <>
      {body}

      <AddPostModal></AddPostModal>
    </>
  );
};

export default Dashboard;
