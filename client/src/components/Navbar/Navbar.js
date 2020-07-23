import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./Navbar.css";
// NavLink adds "active" to className when path matches.
function Navbar() {
  const { isLoggedIn, logout, role } = useAuth();
  const links = [<BrandLink key="/" to="/" />];
  if (!isLoggedIn) {
    // links.push(
    //   <NavLink key="signup" className="nav-item" to="/signup">
    //     Sign Up
    //   </NavLink>
    // );
    links.push(
      <NavLink key="frontpage" className="nav-item" to="/frontpage">
        Home
      </NavLink>
    );
  }

  links.push(
    <NavLink key="menu" className="nav-item" to="/menu">
      Menu
    </NavLink>
  );
  links.push(
    <NavLink key="joinourteam" className="nav-item" to="/joinourteam">
      Join Our Team
    </NavLink>
  );
  links.push(
    <NavLink key="contact" className="nav-item" to="/contact">
      Contact
    </NavLink>
  );
  links.push(
    <NavLink key="reservation" className="nav-item" to="/reservation">
      Reservation
    </NavLink>
  );
  links.push(
    <NavLink key="location" className="nav-item" to="/location">
      Location
    </NavLink>
  );
  links.push(
    <NavLink key="login" className="nav-item" to="/login">
      Place Order
    </NavLink>
  );
  if (isLoggedIn) {
    links.push(
      <NavLink key="order" className="nav-item" to="/order">
        Order
      </NavLink>
    );
    if (role === "admin") {
      links.push(
        <NavLink key="admin" className="nav-item" to="/admin">
          Admin
        </NavLink>
      );
    }
    links.push(
      <span key="lougout" className="nav-item" onClick={logout}>
        Logout
      </span>
    );
  }
  return <nav className="Navbar">{links}</nav>;
}
function BrandLink(props) {
  return (
    <NavLink className="nav-item brand" exact {...props}>
      {/* React JWT */}
    </NavLink>
  );
}
export default Navbar;
