import React from "react";
import { Link } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

const Alert = () => {
  return (
    <div className="Alert">
      <div className="vh-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="container py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="12" xl="4">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle"
                      fluid
                      style={{ width: "100px" }}
                    />
                  </div>
                  <MDBTypography tag="h4">Hiring Update</MDBTypography>
                  <MDBCardText>Asignee: Zoe</MDBCardText>
                  <MDBCardText>Due Date: Monday</MDBCardText>
                  <MDBBtn
                    outline
                    color="dark"
                    rounded
                    size="sm"
                    className="mx-1"
                  >
                    In Progress
                  </MDBBtn>
                  <MDBCardText className="text-muted mb-4">
                    Quick check in on candidate for global Benefits
                    <br />
                    <p className="small mb-0">
                      <MDBIcon far icon="clock me-2" />3 hrs
                    </p>
                  </MDBCardText>
                  <Link to="/DragDrop">
                    <MDBBtn rounded id="alertBtn" size="lg">
                      Close
                    </MDBBtn>
                  </Link>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2"></div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default Alert;
