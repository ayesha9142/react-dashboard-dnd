import "./design/Dash.css";
import Cards from "./Cards";
import PieChart from "./PieChart";
import g2 from "./images/g2.png";
import g3 from "./images/g3.png";
import email from "./images/email.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Nav /> <SideNav />
      <div id="cont">
        <div className="title">
          <h1 className="text">Choose Your Project Plan</h1>
          <p>
            Select the option best describes you. Don't worry you can explore
            other options later.
          </p>
        </div>
        <Container id="deck">
          <Link to="/DragDrop">
            <Row>
              <Col>
                <>
                  {["Light"].map((variant) => (
                    <Card
                      bg={variant.toLowerCase()}
                      key={variant}
                      text={
                        variant.toLowerCase() === "light" ? "dark" : "white"
                      }
                      style={{ width: "18rem" }}
                      className="mb-2"
                    >
                      <Card.Header>Header</Card.Header>
                      <Card.Body>
                        <Card.Title>{variant} Project Management </Card.Title>
                        <Card.Text>
                          Project management is the use of specific knowledge,
                          skills, tools and techniques to deliver something of
                          value to people.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </>
              </Col>
              <Col>
                <>
                  {["Primary"].map((variant) => (
                    <Card
                      bg={variant.toLowerCase()}
                      key={variant}
                      text={
                        variant.toLowerCase() === "light" ? "dark" : "white"
                      }
                      style={{ width: "18rem" }}
                      className="mb-2"
                    >
                      <Card.Header>Header</Card.Header>
                      <Card.Body>
                        <Card.Title>{variant} Finance Management </Card.Title>
                        <Card.Text>
                          Project management is the use of specific knowledge,
                          skills, tools and techniques to deliver something of
                          value to people.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </>
              </Col>
              <Col>
                <>
                  {["Light"].map((variant) => (
                    <Card
                      bg={variant.toLowerCase()}
                      key={variant}
                      text={
                        variant.toLowerCase() === "light" ? "dark" : "white"
                      }
                      style={{ width: "18rem" }}
                      className="mb-2"
                    >
                      <Card.Header>Header</Card.Header>
                      <Card.Body>
                        <Card.Title>{variant} Portfolio Management </Card.Title>
                        <Card.Text>
                          Project management is the use of specific knowledge,
                          skills, tools and techniques to deliver something of
                          value to people.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </>
              </Col>
            </Row>
          </Link>
        </Container>
      </div>
      <Container className="Revenue">
        <Row>
          <Col sm={4}>
            <img
              id="desk"
              src="https://www.pngitem.com/pimgs/m/23-236353_man-working-in-office-clipart-hd-png-download.png"
              alt=""
              width="700"
              height="250"
            />
          </Col>
          <Col sm={8} className="text" id="wh">
            <h3>
              Success is not final; failure is not fatal: it is the courage to
              continue that counts.
            </h3>
            <br />
            <div id="btn">
              <button type="button" class="btn btn-primary btn-lg">
                Large button
              </button>
              <button type="button" class="btn btn-secondary btn-lg">
                Large button
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="Bottom">
        <Row>
          <Col id="chart">
            <h3>Pie Representation</h3>
            <br /> <PieChart />
          </Col>
          <Col>
            <Row id="g2">
              <Col>
                <div class="col-sm-6" id="revenue">
                  <div class="row">
                    <div class="col-8">
                      <h5>Revenue</h5>
                      <img id="revenue" alt="" src={g2} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="col-sm-4">
                  <div class="budget">
                    <div class="row">
                      <select name="year" id="year">
                        <option value="volvo">2020</option>
                        <option value="saab">2019</option>
                        <option value="opel">2018</option>
                      </select>
                    </div>
                    <br />
                    <img src={g3} alt="" width="100" height="100" />
                    <div class="row">$25,852</div>
                    <div class="row">Budget:56,800</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="">
        <Row>
          <Col sm={8}>
            <div id="middle">
              "
              <Cards />
            </div>
          </Col>
          <Col sm={4} className="text">
            <img src={email} alt="" />
            <br />
            <p id="mid">
              Is your Advertising Strategy making you lose money? Even the best
              of affiliate marketing strategies stumble at one point i.e.
              budgeting. Keeping an account of the investments made across
              channels to different agencies or publishers can give jitters to
              your profits. So, maximizing your return on expenditure yet
              staying sustainable
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
