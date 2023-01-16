import Card from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Info from "./Info";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <Card style={{ width: "18rem", height: "12rem" }}>
      <Link to="/DragDrop">
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Task Managemnent
          </Card.Subtitle>
          <Card.Text>Portfolio and workload Management</Card.Text>
          <Popup
            trigger={<Button variant="">Go to projects</Button>}
            position="right center"
          >
            <div>
              <Info />
            </div>
          </Popup>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Board;
