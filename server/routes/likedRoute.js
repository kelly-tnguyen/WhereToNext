const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/likedController");


router.get('/likes',list)
router.get('/likes/:id', show)
router.post('/likes', create)
  
module.exports = router;