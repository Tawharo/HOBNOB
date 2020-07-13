import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Admin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setRole(res.data.role);
    });
  }, [user]);

  return (
    <Container>
      <h1>On the admin page!</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <Link to="/">Go home</Link>
    </Container>
  );
}

export default Admin;
