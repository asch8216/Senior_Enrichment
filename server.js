const chalk = require("chalk");

const express = require("express");
const path = require("path");
const Sequelize = require("sequelize");
const { User, Product } = require("./models/db.js");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "./build")));

app.post("/users", (req, res, next) => {
  User.create({});
  next();
});

app.get("/products", async (req, res, next) => {
  // Product.create({
  const data = await Product.findAll();
  res.send(data);
  // });
});

app.get("/users", async (req, res, next) => {
  const users = await User.findAll();

  res.send(users);
});

// app.get("/db", (req,res, next) => {
//   res.s
// })

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(
    chalk.green("Express server listening on PORT: "),
    chalk.cyan(PORT)
  );
});
