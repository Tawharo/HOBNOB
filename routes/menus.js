const express = require("express");
const db = require("../models");

//const isAuthenticated = require("../config/isAuthenticated");

const router = express.Router();
//////////////////////get menu /////////////////////////////
router.get("/api/menu", (req, res) => {
  db.Menu.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({ success: false, message: "No user found" });
    }
    if (!data) {
      return res.status(404).json({ success: false, message: "No user found" });
    }
    return res.status(200).json({ success: true, x: data });
  }).catch((err) => res.status(400).send(err));
});

////////////////////get by id ///////////////////////
router.get("/api/menu/:id", (req, res) => {
  db.Menu.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

/////////////////create new menu ///////////////////
router.post("/api/menu", (req, res) => {
  db.Menu.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
/////////////////////////get by update/////////////////////////////////
router.put("/api/menu/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  db.Menu.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot update menu with id. Maybe menu was not found!",
        });
      } else {
        res.send({ message: "successfull" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating the menu with id" });
    });
});
/////////////////////////delete by Id/////////////////////////////////
router.delete("/api/menu/:id", (req, res) => {
  const id = req.params.id;
  db.Menu.findOneAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Menu id not found" });
      } else {
        res.send({ message: "menu was deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "could not delete menu with id " });
    });
});
/////////////////////// find by menu type//////////////////////////
// router.get("api/menu/type", (req, res)=>{
//   const t = req.query.type;
//   let condition=type ? {"type":{$regex: new RegExp(t),$options:"i"}}:{};
//   db.Menu.find(condition)
//   .then((data =>{
//     res.send(data)
//   })
//   .catch(err =>{
//      res.status(500).send({
//        message:"Can not retriveing menu by type"});
//   })
// })

module.exports = router;
