import decode from "jwt-decode";
import axios from "axios";
import API from "../API";


export default class AuthService {
  
  constructor(){
    this.state = {
      role: "user"
    };
  }
    login = (email, password) => {
      // Get a token
      const user = axios.post("api/login", {email: email, password: password})
        .then(res => {
          console.log(res);
          // set the token once the user logs in
          this.setToken(res.data.token);
          //this.setRole()
          this.state.role = res.data.user.role;
          // return the rest of the response
          return res;
        });

      return user;
    };

    getRole = (id) => this.state.role;
      
    getProfile = () => {
      return decode(this.getToken());
    };

    loggedIn() {
      // Checks if there is a saved token and it's still valid
      const token = this.getToken();
      return !!token && !this.isTokenExpired(token); // handwaiving here
    }

    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        }
        else
        {return false;}
      }
      catch (err) {
        return false;
      }
    }

    setToken(idToken) {
      // Saves user token to localStorage
      axios.defaults.headers.common.Authorization = `Bearer ${idToken}`;
      localStorage.setItem("id_token", idToken);
    }

    getToken() {
      // Retrieves the user token from localStorage
      console.log(localStorage.getItem("id_token"));
      return localStorage.getItem("id_token");
    }

    logout() {
      // Clear user token and profile data from localStorage
      axios.defaults.headers.common.Authorization = null;
      localStorage.removeItem("id_token");
      // this will reload the page and reset the state of the application
      window.location.reload("/");
    }


}
