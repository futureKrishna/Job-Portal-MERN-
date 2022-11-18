const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')

const express = require("express");
const env=require('dotenv')
const db = require("./database/connecting2DB");
const body_parser = require('body-parser')
const path = require("path");
const app = express();
const port = 7000;
var cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(cookieParser())
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.use(require("./Routes/JSloginAuth"));
app.use(require("./Routes/EmployeeAuth"));
app.use(require("./Routes/EMPloginAuth"));
app.use(require("./Routes/JSAuth"));
app.use(require("./Routes/EMPAuth"));

app.get("/", function (req, res) {
    res.send("this is home")
});

// app.get("/about", function (req, res) {
//     res.send("this is home")
// });

app.get("/EMPregister", (req, res) => {
    res.send("this is EMPregister")
});

app.get("/EMPlogin", (req, res) => {
    res.send("this is EMPlogin")
});

app.get("/JSregister", (req, res) => {
    res.send("this is JSregister")
});

app.get("/JSlogin", (req, res) => {
    res.send("this is JSlogin")
});

app.get("/CreateEmployee", (req, res) => {
    res.send("this is createEmployee")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
