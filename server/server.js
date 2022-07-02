const express = require("express")
const cors = require("cors")
const db = require("./db/dbConnection")
require("dotenv").config({path: "./config.env"})

const port = process.env.PORT || 5000;

const app = express()
app.use(cors())
app.use(express.json())

////Sample DB Query ///
var query
db.query("SELECT patientID, firstName, lastName, email from HospitalManagement.patients", (err, results) => {
  if (err) {
    console.log(err)
    return
  }
  console.log("Query Executed")
  query = results
})

/////Routes///////
app.get('/', (req, res) => {
  res.send('Welcome to hospital management system')
})

app.get('/patients', (req, res) => {
  res.json(query)
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
