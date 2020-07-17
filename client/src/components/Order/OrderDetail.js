import React from "react";
import "./Order";

class OrderDetail extends React.Component {
  state = {
    tax: 0,
    total: 0,
  };

  handleOrderDetails = () => {
    // event.preventDefault();
    // this.setState({tax : this.state.tax * 0.6});
    // this.setState({total : this.state.total * 0.6});

    return (
      <div class="row">
        <div class="col m12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <label className="tax">Tax</label>
              <input type="text" />
              <label className="total">total</label>
              <input type="text" />
              <button name="btns">submit</button>
            </div>
          </div>
        </div>
      </div>
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