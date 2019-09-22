const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/nationalParksController");

// USERS
router.get('/nationalParks',list)
router.get('/nationalParks/:id', show)
router.post('/nationalParks', create)
  
module.exports = router;