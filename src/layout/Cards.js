import pic2 from "./images/proj2.webp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Info from "./Info";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <Card style={{ width: "18rem", height: "18rem" }}>
      <Link to="/DragDrop">
        <Card.Img variant="top" src={pic2} />
        <Card.Body>
          <Card.Title>Project Management</Card.Title>
          <Card.Text>Managing and utilizing oraganization's resource</Card.Text>
        </Card.Body>
        <Popup
          trigger={<Button variant="primary">Go to projects</Button>}
          position="right center"
        >
          <div>
            <Info />
          </div>
        </Popup>
      </Link>
    </Card>
  );
};

export default Cards;
