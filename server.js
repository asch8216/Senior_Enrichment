const chalk = require("chalk");

const express = require("express");
const morgan = require("morgan");
const router = require("express").Router();
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

app.get("/api/students", async (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

app.get("/api/campuses", (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

app.get("/campuses/:campusId", (req, res, next) => {
  Campus.findById(req.params.campusId, {
    include: [Student]
  })
    .then(campus => res.json(campus))
    .catch(e => {
      console.log("error in campus.findById", e);
      next(e);
    });
});

app.post("/api/campuses", (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(e => {
      console.log("error in campus.create", e);
      next(e);
    });
});

app.post("/api/students", (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(e => {
      console.log("error in student.create", e);
      next(e);
    });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(
    chalk.green("Express server listening on PORT: "),
    chalk.cyan(PORT)
  );
});
