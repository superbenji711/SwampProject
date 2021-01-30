const userController = require('../controllers/userController.js');
// const express = require() 'express';
const express = require('express');

const userRouter = express.Router();



userRouter.get('/:_id', userController.get); // get user by id
userRouter.get('/', userController.getAll); //get all users


userRouter.post('/', userController.create); //create user

userRouter.put('/update/:_id', userController.update); //update by id

userRouter.delete('/:_id', userController.remove); //delete by id



// export default userRouter;

module.exports = userRouter;