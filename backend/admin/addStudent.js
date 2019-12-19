const exp = require("express");

const bodyParser = require("body-parser");

const student = require("../database/Model/studentSchema");

const addStudentApp = exp.Router();

addStudentApp.use(bodyParser.json());

//Request Handlers
//Add Student POST request handler
addStudentApp.post("/add_student", (request, response) => {
  student
    .findOne({
      $and: [
        ({ batchId: request.body.batchId },
        { studentId: request.body.studentId })
      ]
    })
    .exec()
    .then(result => {
      if (result !== null) {
        response.json({
          message: `Student Record with ${request.body.studentId} already exist`
        });
      } else {
        let studentDoc = new student({
          batchId: request.body.batchId,
          batchName: request.body.batchName,
          studentId: request.body.studentId,
          studentName: request.body.studentName,
          studentContact: request.body.studentContact,
          studentEmail: request.body.studentEmail,
          guardianName: request.body.guardianName,
          guardianContact: request.body.guardianContact
        });
        studentDoc
          .save()
          .then(() => {
            response.json({ message: `Student added successfully` });
          })
          .catch(error => {
            response.json({ message: `Error while Save` });
          });
      }
    })
    .catch(error => {
      response.json({ message: `Error while POST ${error}` });
    });
});

//get all student of that batch by POST request Handler
addStudentApp.post("/get_student", (request, response) => {
  student
    .find({
      $and: [
        { batchId: request.body.batchId },
        { batchName: request.body.batchName }
      ]
    })
    .exec()
    .then(result => {
      if (result == null) {
        response.json({ message: `No data found` });
      } else {
        response.json({ message: result });
      }
    })
    .catch(error => {
      console.log(error);
      response.json({ message: `error while GET data ${error}` });
    });
});

//delete a student from batch by POST request handler

addStudentApp.post("/delete_student", (request, response) => {
  student
    .findOne({
      $and: [
        { batchId: request.body.batchId },
        { batchName: request.body.batchName },
        { studentId: request.body.studentId }
      ]
    })
    .exec()
    .then(result => {
      if (result === null) {
        response.json({ message: `Data not found to delete` });
      } else {
        student
          .deleteOne({
            $and: [
              { batchId: request.body.batchId },
              { studentId: request.body.studentId }
            ]
          })
          .exec()
          .then(() => {
            response.json({
              message: `Student record of this batch is deleted successfully`
            });
          })
          .catch(error => {
            console.log(error);
            response.json({ message: `Cannot Delete ${error}` });
          });
      }
    })
    .catch(error => {
      console.log(error);
      response.json({ message: `error while Delete ${error}` });
    });
});

//Update student data PUT request handler

addStudentApp.put("/update_student", (request, response) => {
  student
    .findOne({
      $and: [
        { batchId: request.body.batchId },
        { batchName: request.body.batchName },
        { studentId: request.body.studentId }
      ]
    })
    .exec()
    .then(result => {
      if (result === null) {
        response.json({ message: `Data not found to update` });
      } else {
        student
          .updateOne(
            {
              $and: [
                { batchId: request.body.batchId },
                { batchName: request.body.batchName },
                { studentId: request.body.studentId }
              ]
            },
            {
              $set: {
                studentName: request.body.studentName,
                studentContact: request.body.studentContact,
                studentEmail: request.body.studentEmail,
                guardianContact: request.body.guardianContact,
                guardianName: request.body.guardianName
              }
            }
          )
          .exec()
          .then(() => {
            response.json({ message: `Student record updated successfully` });
          })
          .catch(error => {
            response.json({ message: `Error while update` });
          });
      }
    })
    .catch(error => {
      console.log(error);
      response.json({ message: `Cannot Update ${error}` });
    });
});

module.exports = addStudentApp;
