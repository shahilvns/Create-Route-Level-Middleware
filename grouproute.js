const express = require("express");
const app = express();
const port = 5000;
const reqFilter = require("./middleware");
const route = express.Router();
route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.end();
});

app.get("/service", reqFilter, (req, res) => {
  res.send("Welcome to Service Page");
  res.end();
});

app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
  res.end();
});

route.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
  res.end();
});

route.get("/course", (req, res) => {
  res.send("Welcome to course Page");
  res.end();
});

app.listen(port, (req, res) => {
  console.log("Server will be start");
});
app.use("/", route);
