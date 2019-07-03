const chalk = require("chalk");

const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const path = require("path");
const Sequelize = require("sequelize");
const { Student, Campus } = require("./models/db.js");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "./build")));

//route all backend traffic that begins with the url '/api' to another file
// app.use("/api", require(routerToOtherFile));

app.post("/api/student", async (req, res, next) => {
  await Student.create({});
  next();
});

app.get("/api/students", async (req, res, next) => {
  const students = await Student.findAll();
  res.send(students);
});

app.get("/api/campus", async (req, res, next) => {
  const campus = await Campus.findAll();

  res.send(campus);
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
