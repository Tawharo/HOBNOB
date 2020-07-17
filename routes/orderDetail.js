const express = require("express");

const db = require("../models");

//const isAuthenticated = require("../config/isAuthenticated");
const router = express.Router();
//////////////////////get order /////////////////////////////
router.get("/api/order", (req, res) => {
  db.Order.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({ success: false, message: "No user found" });
    }
    if (!data) {
      return res.status(404).json({ success: false, message: "No user found" });
    }
    return res.status(200).json({ data });
  }).catch((err) => res.status(400).send(err));
});

////////////////////get by id ///////////////////////
router.get("/api/order/:id", (req, res) => {
  db.Order.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

/////////////////////////////Post Order Details/////////////////
router.post("/api/order", (req, res) => {
  db.Order.create(req.body)
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
