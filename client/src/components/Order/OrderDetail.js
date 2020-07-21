import React from "react";
  // import "./Order";

class OrderDetail extends React.Component {
  state = {
    tax: 0,
    total: 0,
  };
  
  componentDidMount = () => {
    console.log(this.props.cart);
    const order = this.props.cart.reduce(
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
    order.tax = order.total >= 0 ? order.total * 0.06 : 0;
    this.setState({ tax: order.tax, total: order.total });
    
  };
  
  handleOrderDetails = () => {
    return (
      <>
        <label className="tax">Tax</label>
        <h3>{this.state.tax}</h3>
        <label className="total">total</label>
        <h2>{this.state.total}</h2>
        <button name="btns">submit</button>
      
      </>
    
    );
   
  };
  render() {
    return (
      <>
        <div>{this.handleOrderDetails()}</div>
      </>
    );
  }
}
export default OrderDetail;