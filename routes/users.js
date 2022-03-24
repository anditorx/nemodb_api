import express from "express";

import {
  createUser,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users
router.get("/", getUsers);

// post or add user
router.post("/", createUser);

//get with id
router.get("/:id", getUserByID);

//delete user by id
router.delete("/:id", deleteUser);
// update user by id
router.patch("/:id", updateUser);

export default router;
