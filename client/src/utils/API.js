import axios from "axios";
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },

  // postOrder:(title,body)=>{
  //   return axios.post("api/order",{menuType:title,menuItemName:body});
  // },
  getMenu:()=>{
    return axios.get("api/menu");
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", {username: username, email: email, password: password});
  }
};
