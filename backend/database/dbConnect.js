// import mongoose

const mongoose = require("mongoose");

//dbUrl for mongodb atlas connection

const dbUrl =
  "mongodb+srv://vasukbkr:sivajI@123@cluster0-xrnqp.mongodb.net/balreddy?retryWrites=true&w=majority";

//establish connection to db

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log(`Connected with mongoDB Atlas`);
});
connection.on("disconnected", () => {
  console.log(`Disconnected from mongoDB Atlas`);
});
connection.on("error", () => {
  console.log(`Error While Connecting to MongoDB Atlas`);
});

module.exports = connection;

