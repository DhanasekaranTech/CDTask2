// setting up router for  task 
const express = require('express')
const router = express.Router();
const taskController = require('../controllers/taskController')

//configure route for all end points

router.get('/tasks',taskController.getAllTask);
router.post('/tasks',taskController.createTask);
router.get('/tasks/:userId',taskController.getTaskById);
router.delete('/tasks/:userId',taskController.deleteTaskById);
router.put('/tasks/:userId',taskController.updateTaskById);
router.patch('/tasks/:userId',taskController.updateFieldInTask);



//export this module

module.exports = router;


