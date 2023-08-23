// Write all the code here
import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const sectionTitleStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const socialIconStyles = {
    fontSize: "1.5rem",
    marginRight: "0.5rem",
    color: "#1266f1",
  };

  const inputStyles = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem",
    padding: "0.5rem",
    marginBottom: "1rem",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const checkboxStyles = {
    marginBottom: "1rem",
  };

  const buttonStyles = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "rgb(156, 0, 60)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick("tab1")} active={justifyActive === "tab1"}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick("tab2")} active={justifyActive === "tab2"}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem" }}>Sign in with:</p>
            <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
              <MDBBtn tag="a" color="none" className="m-1">
                <MDBIcon fab icon="facebook-f" style={socialIconStyles} />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1">
                <MDBIcon fab icon="twitter" style={socialIconStyles} />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1">
                <MDBIcon fab icon="google" style={socialIconStyles} />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1">
                <MDBIcon fab icon="github" style={socialIconStyles} />
              </MDBBtn>
            </div>
            <p className="text-center mt-3" style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem" }}>or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" style={inputStyles} />
          <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" style={inputStyles} />
          <div className="d-flex justify-content-between mx-4 mb-4" style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem" }}>
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" style={checkboxStyles} />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100" style={buttonStyles}>Sign in</MDBBtn>
          <p className="text-center" style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem" }}>
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className="text-center mb-3">
            <p style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem" }}>Sign up with:</p>
            <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
              <MDBBtn tag="a" color="none" className="m-1">
                <MDBIcon fab icon="facebook-f" style={socialIconStyles} />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1">
                <MDBIcon fab icon="twitter" style={socialIconStyles} />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1">
                <MDBIcon fab icon="google" style={socialIconStyles} />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1">
                <MDBIcon fab icon="github" style={socialIconStyles} />
              </MDBBtn>
            </div>
            <p className="text-center mt-3" style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem" }}>or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" style={inputStyles} />
          <MDBInput wrapperClass="mb-4" label="Username" id="form1" type="text" style={inputStyles} />
          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" style={inputStyles} />
          <MDBInput wrapperClass="mb-4" label="Password" id="form1" type="password" style={inputStyles} />
          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox name="flexCheck" id="flexCheckDefault" label="I have read and agree to the terms" style={checkboxStyles} />
          </div>
          <MDBBtn className="mb-4 w-100" style={buttonStyles}>Sign up</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;

