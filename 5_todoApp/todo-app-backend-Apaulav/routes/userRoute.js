const express = require("express");
const { findUsers, addUser, allUsers}=require("../controllers/usersController");


const router = express.Router();

router.get('/', allUsers)
router.get('/:id', findUsers)
router.post('/', addUser)

module.exports = router;