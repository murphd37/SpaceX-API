// Upcoming Endpoints

const express = require("express")
const v2 = express.Router()
const launch = require("../builders/launch-query")

// Upcoming launches by date, year, or all
v2.get("/", (req, res, next) => {
  const query = launch.launchQuery(req)
  global.db.collection("upcoming_v2").find(query,{"_id": 0 }).sort({"flight_number": 1})
    .toArray((err, doc) => {
      if (err) {
        return next(err)
      }
      res.json(doc)
    })
})

module.exports = v2
