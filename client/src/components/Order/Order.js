import React from "react";
import API from "../../utils/API";
import "./Order.css";
// import Modal from "react-modal";
// import OrderDetail from "./OrderDetail";
// import OrderItem from "../OrderItem";
import Logo from "../Logo";
import { Button, Card, variant, Alert } from "react-bootstrap";
import ReactDOM from "react-dom";
// import OrderItem from "../OrderItem/OrderItem";

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
      orderDetail: [],
      display: false,
      curTime: new Date().toLocaleString(),
    };
  }

  //////////////////////////////////////////////////////////////
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
  //////////////////////////////////////////////// Display Menu function ///////////////////////////
  displaymenus = (menus) => {
    if (!menus.length) return null;
    return menus.map((order, index) => {
      const menulist = { order }.order;
      return (
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>HobNob Menu</Card.Title>
            <Card.Text>
              <div className="menuItem"> key={index}</div>
              <p className="menuTitle">{menulist.menuItemName}</p>
              <p className="price">{menulist.price}</p>
              <p className="menuDescription">{menulist.ingredients}</p>
            </Card.Text>
            <Button
              variant="primary"
              key={menulist._id}
              onClick={(event) => this.addItem(event, menulist)}
            >
              Add
            </Button>
          </Card.Body>
        </Card>
        // <div>
        //   {/* <div className="card"> */}

        //   <button
        //     name="btn"
        //     key={menulist._id}
        //     onClick={(event) => this.addItem(event, menulist)}
        //   >
        //     add
        //   </button>
        // </div>
      );
    });
  };

  //////////////////////////////   Add the menu to the card  /////////////////////////////
  addItem = (event, item) => {
    event.preventDefault();
    let alreadyIncart = false;
    if (this.state.cart.length > 0) {
      this.state.cart = this.state.cart.map((cartItem) => {
       
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
      this.setState({ cart: newcart });
      total = price + this.state.itemtotal;
      let t = this.state.tax * total;
      this.state.taxes = t;
      this.setState({ grandtotal: t + total });
      this.setState({ itemtotal: total });
      this.setState({ taxes: t });
      console.log(this.state.cart);
    }
  };

  ////////////////// find the value of quantity////////////////////////////////

  findValue = (menuItemId) => {
    // Find the menu Item in the cart
    // Return the correct qty
    let found = this.state.cart.find((cartItem) => cartItem._id == menuItemId);
    let qty = found.qty && found.qty >= 0 ? found.qty : 1;
    console.log("qty", qty);
    return qty;
  };
  ////////////////// Update the value of quantity////////////////////////////////
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

  result = (cart) => {
    console.log(this.state.cart);
    const order = this.state.cart.reduce(
      (acc, item) => {
        console.log("od", { item });
        let total = item.price.substr(1);
        total = Number(total);
        acc.total += total * (item.qty || 1);
        console.log("q++", acc.total);
        this.state.itemtotal = acc.total;
        return acc;
      },
      { total: 0 }
    );
    order.tax = this.state.itemtotal > 0 ? this.state.itemtotal * 0.06 : 0;

    this.setState({
      taxes: order.tax,
      grandtotal: this.state.itemtotal + order.tax,
    });
  };
  /////////////////////////////////////////// Dispaly price ///////////////////////////////////////
  handleOrderDetails = () => {
    return (
      <>
        <Card style={{ width: "30rem", align: "left" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body style={{ align: "left" }}>
            <Card.Text>
              <label className="Total Menu">Total Menu</label>
              <h2>{this.state.itemtotal}</h2>
              <label className="tax">Tax</label>
              <h3>{this.state.taxes}</h3>
              <label className="Gtotal">Grand Total</label>
              <h2>{this.state.grandtotal}</h2>
              <button
                name="btn1"
                onClick={() => this.setState({ display: true })}
              >
                submit
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  };
  /////////////////////////////////////////////////////////////////////////////////////
  displayReceipt = (items) => {
    return items.map((order, index) => {
      if (!items.length) return null;
      const menulist = { order }.order;
      // const price= parseInt(menulist.price)

      const price = menulist.price;
      const menuItemName = menulist.menuItemName;
      const ingredients = menulist.ingredients;
      const quantity = menulist.qty;
      return (
        <>
          <Card style={{ width: "30rem", align: "left" }}>
            <Card.Body style={{ align: "left" }}>
              <Card.Text>
                <div className="menuItem" key={index}></div>
                <div className="menuTitle">{menuItemName}</div>
                <div className="price">{price}</div>
                <div className="menuDescription">{ingredients}</div>
                <div className="quantity"> {quantity}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      );
    });
  };
  /////////////////////////////////////////////////////////////////////////////////////////

  displayPrice = () => {
    return (
      <>
        <Card style={{ width: "30rem", align: "left" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body style={{ align: "left" }}>
            <Card.Text>
              <label className="Total Menu">Total Menu</label>
              <h2>{this.state.itemtotal}</h2>
              <label className="tax">Tax</label>
              <h3>{this.state.taxes}</h3>
              <label className="Gtotal">Grand Total</label>
              <h2>{this.state.grandtotal}</h2>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  };
  ///////////////////////   post order detail   //////////////////////////////////
  // postOrderDetail = () => {
  //   API.postOrder(this.state.cart, this.state.taxes, this.state.grandtotal)
  //   .then((res) => {
  //     res.send(res);
  //     const data = res.data;
  //     console.log({ res });
  //     this.setState({ orderDetail: data });
  //     console.log("data has been received");
  //   })
  //   .catch((e) => {
  //     console.log(e, "data has not found");
  //   });
  //   const id = "5f1914de03b16654d4f47b96";
  //   this.getorderdetail(id);
  // };

  ///////////order detail by ID /////////////////
  // getorderdetail = (id) => {
  //   API.getorderById(id)
  //     .then((res) => {
  //       console.log("orderdetail", { res });
  //       const data = res.data.Menu;
  //       this.setState({ orderDetail: data });
  //       console.log("data has been received");
  //     })
  //     .catch(() => {
  //       alert("data has not found");
  //     });
  // };

  ////////////////////////////////////////// It displays the customer choosed menu  /////////////////////
  displaychoosedmenu = (items) => {
    return items.map((order, index) => {
      if (!items.length) return null;
      const menulist = { order }.order;
    
      const price = menulist.price;
      const menuItemName = menulist.menuItemName;
      const ingredients = menulist.ingredients;
      return (
        <Card style={{ width: "30rem", align: "left" }}>
          <Card.Body style={{ align: "left" }}>
            <Card.Text>
              <div className="menuItem" key={index}></div>
              <div className="menuTitle">{menuItemName}</div>
              <div className="price">{price}</div>
              <div className="menuDescription">{ingredients}</div>
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
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  ////////////////////////////  remove from the list   /////////////////////////////////////////////////
  handleRemove = (e, id) => {
    e.preventDefault();
    let tot=0;
    const newlist = this.state.cart.filter((item) => item._id !== id)
    this.setState({ cart: newlist });
    if (newlist.length > 0){
    newlist.map((data)=>{
      let price = parseInt(data.price.substr(1));
      tot = price + tot
      console.log("tot",tot)  
      
      let tax=0.06*tot
      let grandtot= tax + tot
      this.setState({taxes:tax,itemtotal:tot,grandtotal:grandtot})
    })
  }
    
  };
 

  /////////////// render function    /////////////////////////////////////////////////
  render() {
    console.log("state:", this.state.cart);
    if (this.state.cart.length === 0) {
      return (
        <>
          <div>
            <Logo />
            <div className="blog">{this.displaymenus(this.state.menus)}</div>
          </div>
        </>
      );
    }

    if (this.state.display !== true) {
      return (
        <>
          <div>
            <Logo />
            <div className="blog">{this.displaymenus(this.state.menus)}</div>
          </div>
          {/* {this.state.showOrderDetail ? (
          <OrderDetail report={this.state.finalOrder} />
        ) : null} */}

          <div className="display">
            {this.displaychoosedmenu(this.state.cart)}
          </div>
          <div className="result">
            {this.handleOrderDetails(this.state.cart)}
          </div>
          {/* <OrderDetail cart={this.state.cart} /> */}
        </>
      );
    }
    return (
      <>
        <Logo />

        <div className="dis">
          <p>Receipt</p>
          <p>Current Time : {this.state.curTime}</p>
          {this.displayReceipt(this.state.cart)}
          {this.displayPrice()}
          <button name="print" onClick={"http://localhost:3000/frontpage"}>Print</button>
          <button name="email"> Email</button>
        </div>
      </>
    );
  }
}
export default orders;
