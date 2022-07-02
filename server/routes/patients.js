const express = require("express")
const router = express.Router()

const db = require("../db/dbConnection")

/**
 * Query the databse and return the list of patients
 */
router.get('/list', (req, res) => {
  db.query("SELECT patientID, firstName, lastName, email from HospitalManagement.patients", (err, results) => {
    if (err) {
      console.log(err)
      res.send("Error")
      return
    }
    console.log("Query Executed")
    res.send(results)
  })
})

module.exports = router