import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import Logo from "../components/Logo";

const loginStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const routeChange = () => {
    let path = "/signup";
    history.push(path);
  };

  return (
    <>
      <Logo />
      <div style={loginStyle}>
        <div>
          <h4>Login</h4>
          <p>If you do not have an accout. Please sign up here.</p>
          <button className="link-button" onClick={routeChange}>
            Sign up
          </button>
          <br></br>
          <Form onSubmit={handleFormSubmit}>
            <InputGroup
              style={{
                color: "black",
              }}
              id="email"
              labelText="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup
              style={{
                color: "black",
              }}
              id="password"
              labelText="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button">Submit</button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
