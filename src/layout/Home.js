import ProjectPage from "./ProjectPage";
import login from "./images/login.svg";
import { useRef } from "react";
import "./design/Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value === "abc@gmail.com" &&
      password.current.value === "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div className="Home">
      {getEmail && getPassword ? (
        <ProjectPage />
      ) : (
        <div className="login">
          <Container>
            <Row>
              <Col sm={8}>
                <img src={login} alt="" id="loginImg" />
              </Col>
              <Col sm={4}>
                <div id="loginAlert">
                  <p id="loginText">
                    email : abc@gamil.com <br />
                    password : 12345{" "}
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      ref={email}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      ref={password}
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                    id="loginBtn"
                  >
                    Submit
                  </button>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Home;
