import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import Logo from "../components/Logo";

const loginStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "400px",
  margin: "0 auto",
  marginTop: "80px",
  // backgroundColor: "blue",
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
      .then(() => history.push("/"))
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
          <p className="contact">Please login to place an order for pick up.</p>
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
            <button className="btn-rad">Log In</button>
            <br></br>
            <br></br>
            <h4>Sign Up</h4>
            <p className="contact">
              If you have not signed up with us yet, please do now!
            </p>

            <button className="btn-rad" onClick={routeChange}>
              Sign up
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
