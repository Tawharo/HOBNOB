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
    console.log("check");
    return (
       <div class="row">
         <div class="col s12 m6">
           <div class="card blue-grey darken-1">
             <div class="card-content white-text">
             <button name="btns">
             submit
         </button>
              <label className="tax">Tax</label>
               <input type="text" />
          
              <p color="white"> check</p>
            
           <label className="total" >total</label>
         <input type="text" />
        </div> 
</div>
</div>
</div>

    );
  };
  render() {
    return (
        <>
        <div>
            {this.handleOrderDetails()}
     
      </div>
</>
    );
  }
}
export default OrderDetail;
