import { v4 as uuidv4 } from "uuid";
import express from "express";
uuidv4();

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const body = req.body;

  users.push({ ...body, id: uuidv4() });
  const messageResponse = {
    status: 200,
    message: `User with the name ${body.firstName} added to the database!`,
    data: users,
  };
  res.send(messageResponse);
};

export const getUserByID = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  const messageResponse = {
    status: foundUser ? 200 : 404,
    message: foundUser ? `Get user with id ${id} succeed` : `No data available`,
    data: foundUser ? foundUser : null,
  };

  res.send(messageResponse);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  const messageResponse = {
    status: users ? 200 : 404,
    message: users ? `Delete user with id ${id} succeed` : `No data available`,
    data: users ? users : null,
  };

  res.send(messageResponse);
};

export const updateUser = (req, res) => {
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
};
