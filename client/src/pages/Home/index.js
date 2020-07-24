import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { useAuth } from "../../utils/auth";
import Logo from "../../components/Logo";

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/order");

  return (
    <div className="Home">
      <Logo />
      <div className="Home-header">
        <h2>Welcome {user.username}</h2>
      </div>
      <p className="Home-intro">
        <button className="btn-rad" onClick={goToEditProfile}>
          Place Order
        </button>
        <button
          className="btn-rad"
          style={{ marginLeft: "1em" }}
          onClick={() => logout()}
        >
          Logout
        </button>
      </p>
    </div>
  );
}

export default Home;
