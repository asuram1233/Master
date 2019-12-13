//import express functions
const exp = require("express");
// create express mini
const adminApp = exp.Router();
//import body-parser
const bodyParser = require("body-parser");
//import batchSchema
const batch = require("../database/Model/batchSchema");

//use body-parser
adminApp.use(bodyParser.json());

//request handler

// add batch POST request handler.
adminApp.post("/add_batch", (request, response) => {
  batch
    .findOne({
      $and: [
        { batchId: request.body.batchId },
        { batchName: request.body.batchName }
      ]
    })
    .exec()
    .then(data => {
      if (data == null) {
        let batchDoc = new batch({
          batchId: request.body.batchId,
          batchName: request.body.batchName,
          startDate: request.body.startDate,
          endDate: request.body.endDate
        });
        batchDoc
          .save()
          .then(() => {
            response.json({ message: `batch added successfully` });
          })
          .catch(error => {
            response.json({ message: `Error while insert ${error}` });
          });
      } else {
        response.json({ message: `Batch already exist with the same details` });
      }
    })
    .catch(error => {
      console.log(error);
    });
});

//get all batch GET request handler
adminApp.get("/get_batches", (request, response) => {
  batch
    .find()
    .exec()
    .then(result => {
      if (result === null) {
        response.json({ message: `data not found` });
      } else {
        response.json({ message: result });
      }
    })
    .catch(error => {
      response.json({ message: `Cannot get data ${error}` });
    });
});

//DELETE batch
module.exports = adminApp;
