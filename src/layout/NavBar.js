import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="NavBar">
      <>
        <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
          <Container>
            <Navbar.Brand href="/Dashboard">
              <img
                alt=""
                src="https://w7.pngwing.com/pngs/390/384/png-transparent-wing-blue-icon-blue-wings-blue-simple-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Dashboard
            </Navbar.Brand>
          </Container>
        </Navbar>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/Dashboard">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Dashboard">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Dashboard">
                  Tasks
                </a>
              </li>
            </ul>
            <span class="navbar-text">
              <button onClick={handleClick}>Logout</button>
            </span>
          </div>
        </nav>
      </>
    </div>
  );
};

export default NavBar;
