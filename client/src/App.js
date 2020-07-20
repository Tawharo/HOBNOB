import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage/FrontPage";
import Reservation from "./components/Reservation/Reservation";
import JoinOurTeam from "./components/JoinOurTeam/JoinOurTeam";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Location from "./components/Location/Location";


// our pages
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Pickup from "./pages/Pickup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <div className="main-container">
            <Switch>
              {
                <ProtectedRoute exact path="/">
                  <Home />
                </ProtectedRoute>
              }
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/frontpage">
                <FrontPage />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/reservation">
                <Reservation />
              </Route>
              <Route exact path="/joinourteam">
                <JoinOurTeam />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/menu">
                <Menu />
              </Route>
              <Route exact path="/location">
                <Location />
              </Route>
              <Route exact path="/pickup">
                <Pickup />
              </Route>
              <ProtectedRoute exact path="/profile">
                <Profile />
              </ProtectedRoute>
              <AdminRoute exact path="/admin">
                <Admin />
              </AdminRoute>
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
