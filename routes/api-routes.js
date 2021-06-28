const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
  });

  app.post("/api/signup", (req, res) => {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json(err);
      });
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        username: req.user.username,
        id: req.user.id,
      });
    }
  });

  app.post("/api/newtodo", (req, res) => {
    console.log(req.body)
    db.ToDo.create({
      toDo: req.body.toDo,
    })
      .then((toDo) => {
        res.json(toDo);
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json(err);
      });
  });

  app.post("/api/newtodo", (req, res) => {
    db.Event.create({
      toDo: req.body.toDo,
    })
      .then((toDo) => {
        res.json(toDo);
        // res.redirect(307, "/homepage");
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json(err);
      });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.end();
  });
};
