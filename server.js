// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const path = require('path')

const passport = require("./config/passport");

const PORT = process.env.PORT || 3001;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/api-routes.js")(app);

// Serve up static assets 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "my-app", "build")));
  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/my-app/build/index.html'));
  });
}

// Syncing database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT
    );
  });
});