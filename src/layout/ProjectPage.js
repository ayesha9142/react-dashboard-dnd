import Nav from "./Nav";
import "./design/Project.css";
import SideNav from "./SideNav";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards";
import Board from "./Board";
import email from "./images/email.svg";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className="ProjectPage">
      <Nav /> <SideNav />
      <div className="nav2">
        <NavBar />
        <Container className="task">
          <Row>
            <Col>
              <Row>
                <Col sm={4}>
                  <span id="same">+ ...</span>
                </Col>
              </Row>
              <Row id="proj">
                <img src={email} alt="" />
              </Row>
              <Row id="proj">
                <Link to="/DragDrop">
                  <Board />
                </Link>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col sm={8}>Do today</Col>
                <Col sm={4}>
                  <span id="same">+ ...</span>
                </Col>
              </Row>
              <Row id="proj">
                <Cards />
              </Row>
              <Row id="proj">
                <Board />
              </Row>
            </Col>
            <Col>
              <Row>
                <Col sm={8}>Do next week</Col>
                <Col sm={4}>
                  <span id="same">+ ...</span>
                </Col>
              </Row>
              <Row id="proj">
                <Board />
              </Row>
              <Row id="proj">
                <Cards />
              </Row>
            </Col>
            <Col>
              <Row>
                <Col sm={8}>Do later</Col>
                <Col sm={4}>
                  <span id="same">+ ...</span>
                </Col>
              </Row>
              <Row>
                <Board />
              </Row>
              <Row></Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectPage;
