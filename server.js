// import express module
const exp = require("express");
//import path module
const path = require("path"),
  //Import AdminApi
  adminApi = require("./backend/admin/admin");

//use express functions
const app = exp();

//use path and link FE and BE
app.use(exp.static(path.join(__dirname, "./dist/IMS-system")));
//use adminApp
app.use("/admin", adminApi);
//assign port and listen
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`You are listening on ${PORT}`);
});
