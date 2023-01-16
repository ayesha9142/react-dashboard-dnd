import "./design/sidebar.css";
import { MDBCardImage, MDBCardText, MDBTypography } from "mdb-react-ui-kit";
const SideNav = () => {
  return (
    <div className="SideNav">
      <div class="sidebar">
        <div className="mt-3 mb-4">
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            className="rounded-circle"
            fluid
            style={{ width: "100px" }}
          />
        </div>
        <MDBTypography tag="h4">Welcome Mate!</MDBTypography>
        <MDBCardText>Explore With Us</MDBCardText>
        <a href="/Dashboard">
          <i class="far fa-file"> About</i>
        </a>
        <a class="active" href="/Dashboard">
          <i class="fas fa-home"> Dashboard</i>
        </a>
        <a href="/Dashboard">
          <i class="fas fa-phone"> Contact</i>
        </a>
        <a href="/Dashboard">
          <i class="fas fa-signal"> Resources</i>
        </a>
        <a href="/Dashboard">
          <i class="far fa-bell"> Notifications</i>
        </a>
        <a href="/Dashboard">
          <i class="fas fa-cogs">Setting</i>
        </a>
        <a href="/Dashboard">
          <i class="fas fa-users"> Customers</i>
        </a>
        <a href="/Dashboard">
          <i class="fas fa-graduation-cap"> Solutions</i>
        </a>
      </div>
    </div>
  );
};

export default SideNav;
