import axios from "axios";

export default {
  // Gets a single user by id
  getUser: (id) => {
    console.log("<<<", id);
    return axios.get(`/api/user/${id}`);
  },

  // postOrder:(title,body)=>{
  //   return axios.post("api/order",{menuType:title,menuItemName:body});
  // },
  // getMenu: () => {
  //   return axios.get("api/menu");
  // },
  getRole: (id) => {
    const user = axios.get(`/api/user/${id}`);
    console.log(user);
    return user.role;
  },

  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", {
      username: username,
      email: email,
      password: password,
    });
  },

  // retrieve menu items
  getMenu: () => {
    console.log("<<< Menu API");
    return axios.get("api/menu", {});
  },
  getorderById: (id) => {
    return axios.get(`/api/order/${id}`);
  },

  postOrder: (cart, tax, total) => {
    if (cart.length > 0) {
      cart.map((data) => {
        console.log("dataa", data);
        return axios.post("/api/order", {
          price: data.price,
          menuItemName: data.menuItemName,
          quantity:data.qty,
          tax: tax,
          grandTotal: total,
        });
      });
    }
  
  },
  // getMenu: (res) => {
  //   return axios.get("api/menu", {});
  // return axios.get("api/menu");
  // },
  // getMenu: (res) => {
  //   return axios.get("api/menu", {});
  // },

  // postOrder: (title, body) => {
  //   return axios.post("api/menu", { menuType: title, menuItemName: body });
  // },
};
