import React from "react";
// import logo from "./logo.svg";
import API from "../../utils/API";
import "./Order.css";

class orders extends React.Component {
//  constructor(props){
//    super(props)
//   }
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
                onClick={(event) => this.addItem(event, printmenu )}
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
    // items.map(data => {
  //  if(!data.length) return null;
  this.setState({addtocart:items})
   console.log("add",this.state.addtocart)
 
  }

  
SelectedItem =(addtocart)=>{
  if (!addtocart.length) return null;
  return addtocart.map((order, index) => {
    const printmenu = { order }.order;
    console.log("!",{printmenu})
  return (
      <div>
        <div className="card">
          <div className="menuItem" key={index}></div>
          <div className="menuTitle">{printmenu.menuItemName}</div>
          <div className="price">${printmenu.price}</div>
          <div className="menuDescription">{printmenu.ingredients}</div>
          {/* <p>
            <button
              name="btn"
              key={printmenu._id}
              onClick={(event) => this.addItem(event, printmenu )}
            >
              add
            </button>
          </p> */}
          {/* <button onClick={()=>this.addItem(printmenu)}>Add</button></p> */}
        </div>
      </div>
    );
  });
}
  render() {
    console.log("state:", this.state);
    return (
      <>
        <div>
          <div className="blog">{this.displaymenus(this.state.menus)}</div>
        </div>
        <div className="abdu"> {this.SelectedItem(this.state.addtocart)}</div>
       </>
    );
  }
}
export default orders;
