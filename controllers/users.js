import { v4 as uuidv4 } from "uuid";
uuidv4();
export const getUser = (req, res) => {
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
