// import express module
const exp = require("express");
//import path module
const path = require("path");
//import body-parser
const bodyParser = require("body-parser");
//Import AdminApi
const adminApi = require("./backend/admin/admin");
//import Database connection
const dbConnect = require("./backend/database/dbConnect");
//import login Schema
const login = require("./backend/database/Model/loginSchema");
//import jsonwebtoken
const jwt = require("jsonwebtoken");

//use express functions
const app = exp();

//use path and link FE and BE
app.use(exp.static(path.join(__dirname, "./dist/IMS-system")));
//use body-parser
app.use(bodyParser.json());
//use adminApp
app.use("/admin", adminApi);
//assign port and listen
const PORT = 3000;

//login request handler
app.post("/login", (request, response) => {
  login
    .findOne({ username: request.body.username })
    .exec()
    .then(result => {
      if (result === null) {
        response.json({ message: `please enter valid credentials` });
      } else {
        jwt.sign(
          { username: result.username },
          "AnirudhSuram",
          (error, token) => {
            if (error) {
              response.json({ message: `error ${error}` });
              console.log(error);
            } else {
              response.json({
                message: "login is success",
                username: result.username,
                token: token,
                userroll: result.userroll
              });
            }
          }
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`You are listening on ${PORT}`);
});
