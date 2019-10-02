const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/archiveController");


router.get('/archives',list)
router.get('/archives/:id', show)
router.post('/archives', create)
  
module.exports = router;