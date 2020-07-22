import React from "react";
import API from "../../utils/API";
import "./Order.css";
import OrderDetail from "./OrderDetail";
import OrderItem from "../OrderItem";
class orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      menus: [],
      tax: 0.06,
      itemtotal: 0,
      taxes: 0,
      grandtotal: 0,
      // showorderDetial: false,
    };
    // this.handleClick = this.handleClick.bind(this);
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
    let alreadyIncart = false;
    if (!item) return null;
    if (this.state.cart.length > 0) {
      this.state.cart = this.state.cart.map((cartItem) => {
        console.log(cartItem._id);
        if (cartItem._id === item._id) {
          alert("Its already choosed");
          alreadyIncart = true;
        }
        return cartItem;
      });
    }
    if (!alreadyIncart) {
      let price = parseInt(item.price.substr(1));
      let total = this.state.itemtotal;
      const newcart = [...this.state.cart];
      newcart.push(item);
      // this.setState({ total: item.price });
      // roundtax = this.state.itemtotal > 0 ? (price * 0.06 )+this.state.itemtotal: 0;
      this.setState({ cart: newcart });
      total = price + this.state.grandtotal;
      let t = this.state.tax * total;
      this.state.taxes = t;
      this.setState({ grandtotal: t + total });
      this.setState({ itemtotal: total });
      this.setState({ taxes: t });
      console.log(this.state.cart);
      // return <OrderDetail key={this.state.cart} cart={this.state.cart} />;
      // this.updateQuantity(event,newcart)
    }
  };

  //////////////////

  findValue = (menuItemId) => {
    // Find the menu Item in the cart
    // Return the correct qty
    let found = this.state.cart.find((cartItem) => cartItem._id == menuItemId);
    let qty = found.qty && found.qty >= 0 ? found.qty : 1;
    console.log("qty", qty);
    return qty;
  };

  updateQuantity = (e, item) => {
    // in state you have a cart
    // the cart has individual items
    // we need to know for each item, is their more than one?
    // if we adjust the quantity we need to update the state of that indivual item to reflect the new qty
    // state= { cart: [item]}
    // item: price, id, NEW qty
    e.preventDefault();
    let qty = e.target.value;
    item["qty"] = qty;
    console.log({ item });
    let cart = this.state.cart.map((orderItem) =>
      orderItem._id === item._id ? item : orderItem
    );
    this.setState({ cart });
    this.result(cart);
  };
  ////////////////////.................results........................../////////////////////////////

  result = () => {
    console.log(this.state.cart);
    const order = this.state.cart.reduce(
      (acc, item) => {
        console.log("od", { item });
        let total = item.price.substr(1);
        total = Number(total);
        acc.total += total * (item.qty || 1);
        console.log("q++", acc.total);
        return acc;
      },
      { total: 0 }
    );
    order.tax = order.itemtotal > 0 ? order.itemtotal * 0.06 : 0;
    this.setState({ tax: order.tax, grandtotal: order.itemtotal });
  };

  handleOrderDetails = () => {
    return (
      <>
        <label className="tax">Tax</label>
        <h3>{this.state.taxes}</h3>
        <label className="itemtotal">itemtotal</label>
        <h2>{this.state.itemtotal}</h2>
        <label className="Gtotal">Grandtotal</label>
        <h2>{this.state.grandtotal}</h2>
        <button name="btns" onClick={() => this.postOrderDetail()}>
          submit
        </button>
      </>
    );
  };

  ///////////////////////post order detail//////////////////////////////////
  postOrderDetail = () => {
    API.postOrder(
      this.state.cart,
      this.state.taxes,
      this.state.grandtotal
    ).then((res) => {
      res.send(res);
      console.log({ res });
      console.log("data has been received");
    });
  };

  ////////////////////////////////////////// It displays the customer choosed menu
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
            <input
              value={this.findValue(menulist._id)}
              onChange={(e) => {
                console.log({ menulist });
                this.updateQuantity(e, menulist);
              }}
              type="number"
            />
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
    let total = 0;
    const newlist = this.state.cart.filter((item) => item._id !== id);
    console.log(id);
    this.setState({ cart: newlist });
  };
  /////////////////////////////////////////////////

  /////////////// render function
  render() {
    console.log("state:", this.state.cart);
    if (this.state.cart.length === 0) {
      return (
        <>
          <div>
            <div className="blog">{this.displaymenus(this.state.menus)}</div>
          </div>
        </>
      );
    }
    return (
      <>
        <div>
          <div className="blog">{this.displaymenus(this.state.menus)}</div>
        </div>
        <div className="display">
          {this.displaychoosedmenu(this.state.cart)}
        </div>
        {/* <Button onClick={this.handleClick} label="Action">add</Button>
        {this.getComponent}  // call the method to render the modal here. */}
        <div className="result">{this.handleOrderDetails(this.state.cart)}</div>
        {/* <OrderDetail cart={this.state.cart} /> */}
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
