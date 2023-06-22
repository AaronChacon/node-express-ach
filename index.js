import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 5500;

app.use(bodyParser.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => res.send("Hello from homepage"));

app.listen(PORT, () => {
  console.log(`Server runing on port: http://localhost:${PORT}`);
});
