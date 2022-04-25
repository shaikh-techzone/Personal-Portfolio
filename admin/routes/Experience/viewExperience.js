const express = require("express");
const experience = require("../../schema/addExperience");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/viewexperience", async (req, res) => {
  let Experience;
  await experience
    .find()
    .then((result) => {
      Experience = result;
    })
    .catch((err) => {
      console.log(`Error`);
    });
  res.render("Experience/viewexperience", {
    title: "View Experience",
    Experience,
  });
});

router.get("/viewexperience/:id", async (req, res) => {
  let id;
  id = req.params.id;
  let action = { _id: id };
  experience.deleteOne(action, (err) => {
    if (err) {
      throw err;
    } else {
      res.redirect("/viewexperience");
    }
  });
});
module.exports = router;
