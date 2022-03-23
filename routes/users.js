import express from "express";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

let users = [];

// all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

// post or add user
router.post("/", (req, res) => {
  const body = req.body;

  users.push({ ...body, id: uuidv4() });
  const messageResponse = {
    status: 200,
    message: `User with the name ${body.firstName} added to the database!`,
    data: users,
  };
  res.send(messageResponse);
});

//get with id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  const messageResponse = {
    status: foundUser ? 200 : 404,
    message: foundUser ? `Get user with id ${id} succeed` : `No data available`,
    data: foundUser ? foundUser : null,
  };

  res.send(messageResponse);
});

//delete user by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  const messageResponse = {
    status: users ? 200 : 404,
    message: users ? `Delete user with id ${id} succeed` : `No data available`,
    data: users ? users : null,
  };

  res.send(messageResponse);
});
// update user by id
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  const { firstName, lastName, age } = req.body;
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  const messageResponse = {
    status: 200,
    message: `Updated user by id ${id} succeed`,
    data: users ? users : null,
  };

  res.send(messageResponse);
});

export default router;
