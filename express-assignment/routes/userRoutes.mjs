import { Router } from "express";
import { getUserById, getUsers,updateUserById,addUser, deleteUserById } from "../controllers/userController.mjs";
//This file helps manage different API endpoints efficiently.
//It allows you to define routes separately and then mount them in the main application file, making your code modular, reusable, and maintainable.

const router = Router();

router.get("/api/users",getUsers);

router.get("/api/users/:id",getUserById);

router.post("/api/users", addUser);

//used to update the entire item
router.put("/api/users/:id",updateUserById);

router.delete("/api/users/:id",deleteUserById);

export default router