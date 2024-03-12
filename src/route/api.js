const express=require('express');
const UserController=require('../controller/UserController');
const taskController = require('../controller/TaskController')
const AuthMiddleware=require('../middleware/AuthMiddleware');



const router=express.Router();

router.post("/registration",UserController.registration);
router.post("/login",UserController.login);
//After login
router.get("/profileDetails",AuthMiddleware,UserController.profileDetails);
router.post("/profileUpdate",AuthMiddleware,UserController.profileUpdate);



router.post('/createTodo',AuthMiddleware, taskController.createTodo)
router.post('/todoUPdate/:id',AuthMiddleware, taskController.todoUPdate)
router.get('/todoRead',AuthMiddleware, taskController.todoRead)
router.get('/removeTodo/:id',AuthMiddleware, taskController.removeTodo)
router.post('/statsMark/:id',AuthMiddleware, taskController.statsMark)

module.exports=router;