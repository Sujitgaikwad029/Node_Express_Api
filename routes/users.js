import express from 'express';
import { addNewUser, getAllUsers, findUserByID, deleteUserByID, patchUsersByID } from '../controllers/users.js'

const router = express.Router();

// Get All Users --->
router.get('/', getAllUsers);

// Add New User --->
router.post('/', addNewUser);

// Find User By ID --->
router.get('/:id', findUserByID);

// Delete User By ID --->
router.delete('/:id', deleteUserByID);

// Patch User By ID --->
router.patch('/:id', patchUsersByID)

export default router;