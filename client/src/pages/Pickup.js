import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import API from "./../utils/API";
import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";
import "../index.css";

function Pickup() {
  const [formState, setFormState] = useState({
    _id: "5f048d7df60cf32c3ca97f83",
    _idUser: "",
    menuItemName: "",
    isSpecial: "",
    image: "",
    ingredients: "",
    price: 0,
    specialPrice: 0,
    quantity: 0,
    tax: 0,
    tip: 5,
    createdAt: "2012-12-12T05:00:00.000Z",
    grandTotal: 0,
    posts: [],
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  function getOrderPost() {
    // const id = "5f048d7df60cf32c3ca97f83";
    API.getMenu()
      .then((res) => {
        // console.log({ res });
        const data = res.data.data;
        setFormState({ posts: data });
        console.log("data has been received");
      })
      .catch(() => {
        alert("data has not found");
      });
  }
  const submit = (event) => {
    event.preventDefault();
    API.postOrder(formState.title, formState.body)
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((err) => alert(err));
    getOrderPost();
  };
  function displayorder(posts) {
    if (!posts.length) {
      return null;
    }
    return posts.map((post, index) => {
      // console.log({ post });
      // console.log({ post }.post.menuType);
      const ordermade = { post }.post;
      // const menuStarters = posts.map(post =>
      //  <post key={post.idAuto} name={post.title}
      //   ingredients={post.body}/>)
      //   console.log(menuStarters)
      return (
        <div>
          <p>Id {ordermade._id} </p>
          <p>userId{ordermade._idUser} </p>
          <p>{ordermade.menuItemName} </p>
          <p>{ordermade.image} </p>
          <p>{ordermade.menuType} </p>
          <p>{ordermade.ingredients} </p>
          <p>{ordermade.price} </p>
          <p>{ordermade.specialPrice} </p>
          <p>{ordermade.quantity} </p>
          <p>{ordermade.tax} </p>
          <p>{ordermade.grandTotal} </p>
          <p>{ordermade.createdAt} </p>
          {/* <p>{post} </p> */}
        </div>
      );
    });
  }
  return (
    <>
      <Logo />
      <div>
        <form className="form" onSubmit={submit}>
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
      </div>
      <div className="blog">{displayorder(formState.posts)}</div>
    </>
  );
}
export default Pickup;
