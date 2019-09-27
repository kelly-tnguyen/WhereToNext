const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/likedController");


router.get('/liked',list)
router.get('/liked/:id', show)
router.post('/liked', create)
  
module.exports = router;