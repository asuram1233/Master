//import express functions
const exp = require("express");
// create express mini
const adminApp = exp.Router();
//import body-parser
const bodyParser = require("body-parser");

//use body-parser
adminApp.use(bodyParser.json());
//request handler
adminApp.get("/get", (request, response) => {
  response.json({ message: ` test get is working` });
});

module.exports = adminApp;
