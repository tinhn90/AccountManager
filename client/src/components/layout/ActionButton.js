import React from "react";
import Button from "react-bootstrap/Button";
import playIcon from "../../assets/play-btn.svg";
import editIcon from "../../assets/pencil.svg";
import deleteIcon from "../../assets/trash.svg";
const ActionButton = (_id) => {
  return (
    <>
      <Button className="post-button" variant="light">
        <img src={playIcon} alt="play" width="24" height="24" />
      </Button>
      <Button className="post-button" variant="light">
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>
      <Button className="post-button" variant="light">
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButton;
