// import express module
const exp = require("express");

//create express mini object
const attendanceApp = exp.Router();

//import body-parser module
const bodyParser = require("body-parser");

//import student schema

const student = require("../database/Model/studentSchema");

//Request handlers
//GET ALL STUDENTS Request Handler
attendanceApp.get("/getAll_students", (request, response) => {
  student
    .find()
    .exec()
    .then(result => {
      if (result === null) {
        response.json({ message: `Data Not Found` });
      } else {
        response.json({ message: result });
      }
    })
    .catch(error => {
      response.json({ message: `Error while GET ${error}` });
    });
});

//export current module
module.exports = attendanceApp;
