//Importing Libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const env = require("dotenv");
//Importing Components
// Main Ui Route
const index = require("./routes/index");

//Creating Server
const app = express();
// Configuring dotenv
env.config();
//Defining Port
const port = process.env.PORT;
//Setting Templating View Engine
app.set("view engine", "ejs");
//app.set("views", "views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//DB Connection URI
const dbCon = process.env.DB_URI;
//Connecting DB with Server
mongoose
  .connect(dbCon)
  .then((result) => {
    app.listen(port, () => {
      console.log(
        `Server Has Been Started on ${port} & DB is Connected Successfully`
      );
    });
  })
  .catch((err) => {
    console.log(`DB Connection Error ${err}`);
  });
//Using routes
// Using Main UI Route
app.use("/", index);


module.exports = app