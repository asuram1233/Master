//import express functions
const exp = require("express");
// create express mini
const adminApp = exp.Router();
//import body-parser
const bodyParser = require("body-parser");
//import batchSchema
const batch = require("../database/Model/batchSchema");
//import studentSchema
const student = require("../database/Model/studentSchema");
//import
const contact_us = require("../database/Model/userSchema");

//use body-parser
adminApp.use(bodyParser.json());

//request handler

//request handler from contact page
adminApp.post("/contact", (request, response) => {
  let userObj = new contact_us({
    name: request.body.name,
    phone: request.body.phone,
    email: request.body.email
  });
  userObj
    .save()
    .then(() => {
      response.json({ message: `We will contact you soon` });
    })
    .catch(error => {
      response.json({ message: `Cannot read your details` });
    });
});

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
            response.json({ message: `Batch added successfully` });
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

//delete batch DELETE request handler
adminApp.delete("/delete_batch/:batchId", (request, response) => {
  batch
    .findOne({ batchId: request.params.batchId })
    .exec()
    .then(result => {
      if (result === null) {
        response.json({ message: `Data cannot be deleted` });
      } else {
        batch
          .deleteOne({ batchId: request.params.batchId })
          .exec()
          .then(() => {
            student
              .deleteMany({ batchId: request.params.batchId })
              .exec()
              .then(() => {
                response.json({ message: `Batch deleted successfully` });
              })
              .catch(error => {
                console.log(error);
              });
            // response.json({ message: `Batch deleted successfully` });
          })
          .catch(error => {
            response.json({ message: `Error while delete ${error}` });
          });
      }
    })
    .catch(error => {
      response.json({ message: `Cannot Delete` });
    });
});

//update branch POST request handler

adminApp.put("/update_batch", (request, response) => {
  batch
    .findOne({
      $and: [
        { batchId: request.body.batchId },
        { batchName: request.body.batchName }
      ]
    })
    .exec()
    .then(result => {
      if (result !== null) {
        batch
          .updateOne(
            { batchId: request.body.batchId },
            {
              $set: {
                batchName: request.body.batchName,
                startDate: request.body.startDate,
                endDate: request.body.endDate
              }
            }
          )
          .exec()
          .then(() => {
            response.json({
              message: `Batch updated successfully`
            });
          })
          .catch(error => {
            response.json({ message: `Error while Update ${error}` });
          });
      } else {
        response.json({
          message: `Batch not found`
        });
      }
    })
    .catch(error => {
      response.json({ message: `Error Cannot Update ${error}` });
      console.log(error);
    });
});

module.exports = adminApp;
