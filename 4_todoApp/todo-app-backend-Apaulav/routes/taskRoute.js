const express = require("express");
const {incompleteTask, findTask, updateTask, deleteTask, addTask, checkCompleteTask}=require("../controllers/taskController");

const router = express.Router();

router.get('/', incompleteTask)
router.get('/:id', findTask)
router.put('/:id',updateTask )
router.delete('/:id', deleteTask)
router.post('/', addTask)
router.patch('/:id', checkCompleteTask)


module.exports = router;