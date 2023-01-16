import { MDBCardImage } from "mdb-react-ui-kit";

const Nav = () => {
  return (
    <div className="Nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/Dashboard">
          <img
            alt=""
            src="https://logos-world.net/wp-content/uploads/2021/02/Simple-Emblem.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Tasks
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/Dashboard">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Dashboard">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Dashboard">
                Projects
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            <a href="Dashboard">
              <MDBCardImage
                width="35"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                alt="avatar"
                className="rounded-circle me-1"
                fluid
              />
              <MDBCardImage
                width="35"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                alt="avatar"
                className="rounded-circle me-1"
                fluid
              />
              <MDBCardImage
                width="35"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                alt="avatar"
                className="rounded-circle me-1"
                fluid
              />
              <MDBCardImage
                width="35"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle me-3"
                fluid
              />
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
