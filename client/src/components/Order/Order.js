import React from "react";
// import logo from "./logo.svg";
import API from "../../utils/API";
import "./Order.css";

class orders extends React.Component {
  //  constructor(props){
  //    super(props)
  //   }
  state = {
    cart: [],
    menus: [],
  };

  componentDidMount = () => {
    this.getMenus();
  };
  getMenus = () => {
    API.getMenu()
      .then((res) => {
        console.log({ res });
        const dat = res.data.Menu;
        this.setState({ menus: dat });
        console.log("data has been received");
      })
      .catch(() => {
        alert("data has not found");
      });
  };

  displaymenus = (menus) => {
    if (!menus.length) return null;
    return menus.map((order, index) => {
      const menulist = { order }.order;
      return (
        <div>
          {/* <div className="card"> */}
          <div className="menuItem" key={index}></div>
          <div className="menuTitle">{menulist.menuItemName}</div>
          <div className="price">${menulist.price}</div>
          <div className="menuDescription">{menulist.ingredients}</div>
          <p>
            <button
              name="btn"
              key={menulist._id}
              onClick={(event) => this.addItem(event, menulist)}
            >
              add
            </button>
          </p>
        </div>
      );
    });
  };
  // its add the menu to the card
  addItem = (event, item) => {
    event.preventDefault();
    if (!item) return null;
    console.log("add", this.state.cart);
    const newcart = [...this.state.cart];
    newcart.push(item);
    this.setState({ cart: newcart });
  };
  // It displays the customer choosed menu
  displaychoosedmenu = (items) => {
    if (!items.length) return null;
    return items.map((order, index) => {
      const menulist = { order }.order;
      return (
      
          <div className="card">
            <div className="menuItem" key={index}></div>
            <div className="menuTitle">{menulist.menuItemName}</div>
            <div className="price">${menulist.price}</div>
            <div className="menuDescription">{menulist.ingredients}</div>
            <div><button> Remove menu</button>
            
            <button> Submit</button>
            </div>
          </div>
          
       ); 
    });
  };

  // render function
  render() {
    console.log("state:", this.state);
    return (
      <>
        <div>
          <div className="blog">{this.displaymenus(this.state.menus)}</div>
        </div>
        <div className="abdu"> {this.displaychoosedmenu(this.state.cart)}</div>
        </>
    );
  }
}
export default orders;
