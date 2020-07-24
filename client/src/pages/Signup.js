import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import Logo from "../components/Logo";

const signupStyles = {
  display: "flex",
  justifyContent: "start",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",
  marginTop: "80px",
};

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Logo />
      <div style={signupStyles} className="Signup">
        <h4 className="signupLogo">Sign Up</h4>
        <p className="contact">
          You must have an account to place an online order for pickup. Please
          fill-out the form below.
        </p>
        <br></br>
        <Form onSubmit={handleFormSubmit}>
          <InputGroup
            style={{
              color: "black",
            }}
            id="username"
            labelText="Username"
            name="username"
            type="text"
            onChange={handleChange}
          />
          <InputGroup
            style={{
              color: "black",
            }}
            id="email"
            labelText="Email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <InputGroup
            style={{
              color: "black",
            }}
            id="pwd"
            labelText="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button className="btn-rad" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
}

export default Signup;
