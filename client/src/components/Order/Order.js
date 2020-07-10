import React, { useState, } from "react";
// import logo from "./logo.svg";
import API from "./../../utils/API";
import "./Order.css";


 function Order() {
  // const item
  //  API.getOrder()
  // .then((res)=>{
  //     res.json(data)
  // })
  const [formState, setFormState] = useState({
    tilte: "",
    body: "",
    posts:[]
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    // const name = target.name;
    // const value = target.value;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  function getOrderPost(){
      API.getOrder()
      .then((res)=>{
          const data=res.data;
          setFormState({posts:data});
          console.log("data has been received");
      })
      .catch(()=>{
        alert("data has not found");
      });

    }
    //  componentDidMount = ()=>  
    // {
    //    this.displayorder();
    // }
  const submit = (event) => {
    event.preventDefault();
    API.postOrder(formState.title, formState.body)
      .then((res) => {
          console.log(res)
        return res;
      })
      .catch((err) => alert(err));
      getOrderPost();
      
  };

 const displayorder = (posts) => {
 if (!posts.length) return null;
   
  return posts.map((post,index) => {
         <div key={index}>
             <h3>{post.title} </h3>
             <p>{post.body} </p>
             </div>
    });
}

  return (
    <>
      <h1>Hello Order</h1>
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="title"
            //value={this.state.tile}
            onChange={handleChange}
          />
        </div>
        <div className="from-input">
          <textarea
            placeholder="text"
            name="body"
            cols="30"
            row="10"
            //value={this.state.body}
            onChange={handleChange}
          ></textarea>
          <br />
        </div>
        <button>Submit</button>
      </form>
      <div className="blog"> 
        =  {displayorder(formState.posts)}
          </div>
    </>
  );
}

export default Order;
