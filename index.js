import express, { json, urlencoded } from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("TEST");
  res.send("Hello world");
});

app.use("/users", usersRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port => http://localhost:${PORT}`)
);
