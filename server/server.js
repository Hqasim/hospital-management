const express = require("express")
const cors = require("cors")

// const db = require("./db/dbConnection")
const signupRouter = require("./routes/signup")
const patientsRouter = require("./routes/patients")
require("dotenv").config({path: "./config.env"})

const port = process.env.PORT || 5000;

const app = express()
app.use(cors())
app.use(express.json())
app.use("/signup", signupRouter)
app.use("/patients", patientsRouter)

////Sample DB Query ///
// var query
// db.query("SELECT patientID, firstName, lastName, email from HospitalManagement.patients", (err, results) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log("Query Executed")
//   query = results
// })

// db.query("INSERT INTO HospitalManagement.patients (`patientID`, `firstName`, `lastName`, `age`, `gender`, `userName`, `password`, `email`) VALUES ('4', 'i', 'i', '1', 'female', 'ksjdnf', 'poqwe', 'kdasjnd@gmail.com')", (err, result) => {
//   if(err){
//     console.error(err)
//     return
//   }
//   console.log("User Created")
// })

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
