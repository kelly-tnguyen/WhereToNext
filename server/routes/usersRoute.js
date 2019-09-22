const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/usersController");

// USERS
router.get('/users',list)
router.get('/users/:id', show)
router.post('/users', create)
  
module.exports = router;