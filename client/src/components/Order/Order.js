import React from "react";
import API from "../../utils/API";
import "./Order.css";
import OrderDetail from "./OrderDetail";

class orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      menus: [],
      tax: 0,
      total: 0,
    };
  }
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
          <div className="price">{menulist.price}</div>
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
    const newcart = [...this.state.cart];
    newcart.push(item);
    this.setState({ cart: newcart });
    console.log(this.state.cart);
    // displayCartandTotal(this.state.cart)
  };
  // displayCartandTotal =(cart)=>{
  //   if (!cart.length) return null;
  //   return cart.map(item)

  // }

  findValue = (menuItemId) => {
    // Find the menu Item in the cart
    // Return the correct qty
    let found = this.state.cart.find((cartItem)=>cartItem._id == menuItemId)
    let qty = found.qty && found.qty >= 0 ? found.qty : 1;
    return qty;
  }

  updateQuantity = (e, item) => {
    // in state you have a cart
    // the cart has individual items
    // we need to know for each item, is their more than one?
    // if we adjust the quantity we need to update the state of that indivual item to reflect the new qty
    // state= { cart: [item]}
      // item: price, id, NEW qty

    console.log('===========')
    console.log({e, item});
    console.log('===========')

    let qty = e.target.value;
    item["qty"] = qty;
    console.log({item});
    let cart = this.state.cart.map((orderItem)=> orderItem._id === item._id ? item : orderItem);
    this.setState({cart})
     
  }

  // It displays the customer choosed menu
  displaychoosedmenu = (items) => {
    return items.map((order, index) => {
      if (!items.length) return null;
      const menulist = { order }.order;
      // const price= parseInt(menulist.price)
      const price = menulist.price;
      const menuItemName = menulist.menuItemName;
      const ingredients = menulist.ingredients;
      return (
        <div className="card">
          <div className="menuItem" key={index}></div>
          <div className="menuTitle">{menuItemName}</div>
          <div className="price">{price}</div>
          {/* <div className="menuDescription">{ingredients}</div> */}
          <div>
            <label name="Qty">Quantity</label>
            <input value={this.findValue(menulist._id)} onChange={(e) => {
              console.log({menulist})
              this.updateQuantity(e, menulist)}} type="number" />
          </div>
          <div>
            <button
              type="button"
              id={menulist._id}
              value={menulist._id}
              onClick={(e) => this.handleRemove(e, menulist._id)}
            >
              Remove menu
            </button>
          </div>
        </div>
      );
    });
  };

  ////////////////////////////remove from the list
  handleRemove = (e, id) => {
    e.preventDefault();
    const newlist = this.state.cart.filter((item) => item._id !== id);
    console.log(id);
    this.setState({ cart: newlist });
    console.log(this.state.cart);
  };

  /////////////// render function
  render() {
    console.log("state:", this.state.cart);
    if (this.state.cart.length === 0) {
      return (
        <>
          <div>
            <div className="blog">{this.displaymenus(this.state.menus)}</div>
          </div>
          <div className="abdu">{this.displaychoosedmenu(this.state.cart)}</div>
          {/* <div className="abdu">{this.displayorderdetail(this.state.cart)}</div> */}
        </>
      );
    }
    return (
      <>
        <div>
          <div className="blog">{this.displaymenus(this.state.menus)}</div>
        </div>
        <div className="abdu"> {this.displaychoosedmenu(this.state.cart)}</div>
        {/* <div className="abdu"> {this.displayorderdetail(this.state.cart)}</div> */}
        <OrderDetail cart={this.state.cart}/>
      </>
    );
  }
}
export default orders;
///////////order detail by ID /////////////////
  // getorderdetail = () => {
  //   API.getorderById()
  //     .then((res) => {
  //       console.log({ res });
  //       const data = res.data.Menu;
  //       this.setState({ orderDetail: data });
  //       console.log("data has been received");
  //     })
  //     .catch(() => {
  //       alert("data has not found");
  //     });
  // };

  ///////////////////////post order detail//////////////////////////////////
  // getorderdetail = () => {
  // API.postorderById()
  // .then((res) => {
  //   console.log({ res });
  //   const data = res.data.Menu;
  //   this.setState({ orderDetail: data });
  //   console.log("data has been received");
  // })
  // .catch(() => {
  //   alert("data has not found");
  // });
  // };