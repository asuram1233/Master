// install and import express
const exp=require("express")
const app=exp()
// import adminapi
const adminapi=require("./backend/apis/adminapi")
// use adminapi
app.use("admin",adminapi)

// connection to frontend to backend using path
const path=require("path")
app.use(exp.static(path.join(__dirname,"./dist/IMS-system")))
// const path=require("path")
// using the path
// app.use(exp.static(path.join(__dirname,'./dist/testingAngular'))

// assign port number
const PORT=261
app.listen(PORT,()=>{
    console.log(`Main Server Is ${PORT}`)
})
