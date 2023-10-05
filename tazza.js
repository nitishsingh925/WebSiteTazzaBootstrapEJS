const express = require("express");
const app = express();
const { db, form } = require("./DataBase/db");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

//  page live rendering link
app.get("/", function (req, res) {
  res.render("index", { requestUrl: req });
});
app.get("/about", (req, res) => {
  res.render("about", { requestUrl: req });
});
app.get("/contact", (req, res) => {
  res.render("contact", { requestUrl: req });
});
app.get("/gallery", (req, res) => {
  res.render("gallery", { requestUrl: req });
});
app.get("/product", (req, res) => {
  res.render("product", { requestUrl: req });
});
app.get("*", (req, res) => {
  res.render("error", { requestUrl: req });
});

app.post("/contact", async (req, res) => {
  const formData = new form(req.body);
  await formData.save();
  res.redirect("/");
});

app.listen(3000, () => {
  db();
  console.log("server listening at http://localhost:3000");
});
