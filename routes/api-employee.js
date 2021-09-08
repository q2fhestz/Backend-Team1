var express = require('express');
var router = express.Router();
var path = require('path');
var {getEmployees} = require('../service/employee-psql.js')


//api/employee
router.get('/', async (req, res, next) => {
  let records = await getEmployees();
  res.send(records);
});



module.exports = router;
