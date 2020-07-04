const express = require("express");
const db = require("../models");
const isAuthenticated = require("../config/isAuthenticated");

const router = express.Router();

router.get("/api/menu", isAuthenticated, (req, res) => {
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
module.exports = router;
