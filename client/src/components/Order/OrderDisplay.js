// Place Holder for Abdus code to display order, not used from this file.

displaymenus = (menus) => {
  if (!menus.length) return null;
  return menus.map((order, index) => {
    const menulist = { order }.order;
    return (
      <Card className={"card-container"}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <div className="title-container">
            <Card.Title className="menu-title">
              {menulist.menuItemName}
            </Card.Title>
            <Card.Title className="menu-price">{menulist.price}</Card.Title>
          </div>
          <div className="description-field">
            <Card.Text className="menu-description">
              {menulist.ingredients}
            </Card.Text>
          </div>
          {/* <div className="menuItem"> key={index}</div> */}
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
