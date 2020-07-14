import React from "react";
// import logo from "./logo.svg";
import API from "../../utils/API";
import "./Order.css";

class orders extends React.Component {
   constructor(props){
     super(props)
     this.addItem=this.addItem.bind(this);
    }
  state = {
    addtocart: [],
    menus: [],
  };

  componentDidMount = () => {
    this.getMenus();
  };
  getMenus = () => {
    API.getMenu()
      .then((res) => {
        console.log({ res });
        const dat = res.data.data;
        this.setState({ menus: dat });
        console.log("data has been received");
      })
      .catch(() => {
        alert("data has not found");
      });
  };

  displaymenus = (posts) => {
    if (!posts.length) return null;
    return posts.map((order, index) => {
      const printmenu = { order }.order;
      return (
        <div>
          <div className="card">
            <div className="menuItem" key={index}></div>
            <div className="menuTitle">{printmenu.menuItemName}</div>
            <div className="price">${printmenu.price}</div>
            <div className="menuDescription">{printmenu.ingredients}</div>
            <p>
              <button
                name="btn"
                key={printmenu._id}
                onClick={(event) => this.addItem(event, printmenu)}
              >
                add
              </button>
            </p>
            {/* <button onClick={()=>this.addItem(printmenu)}>Add</button></p> */}
          </div>
        </div>
      );
    });
  };

  addItem = (event, items) => {
    event.preventDefault();
    console.log("add", this.state.addtocart);
    if (!items.length) return null;
    items.map((order, index) => {
      
      const printmenu = { order }.order;
      console.log("xxx", { printmenu });
     
      return (
        <div>
          <div className="card">
            <div className="menuItem" key={index}></div>
            <div className="menuTitle">{printmenu.menuItemName}</div>
            <div className="price">${printmenu.price}</div>
            <div className="menuDescription">{printmenu.ingredients}</div>
          </div>
        </div>
      );
    });
  };

  // SelectedItem =(addtocart)=>{
  //   if (!addtocart.length) return null;
  //   return addtocart.map((order, index) => {
  //     const printmenu = { order }.order;
  //     console.log("!",{printmenu})
  //   return (
  //       <div>
  //         <div className="card">
  //           <div className="menuItem" key={index}></div>
  //           <div className="menuTitle">{printmenu.menuItemName}</div>
  //           <div className="price">${printmenu.price}</div>
  //           <div className="menuDescription">{printmenu.ingredients}</div>
  //           </div>
  //       </div>
  //     );
  //   });
  // }
  render() {
    console.log("state:", this.state);
    return (
      <>
        <React.Fragment>
          <div>
            <div className="blog">{this.displaymenus(this.state.menus)}</div>
          </div>
          <div className="abdu"> {this.addItem()}</div>
        </React.Fragment>
      </>
    );
  }
}
export default orders;
