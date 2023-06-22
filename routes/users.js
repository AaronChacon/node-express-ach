import express from "express";
const router = express.Router();

const users = [
  {
    firstName: "Aaron",
    lastName: "Chacon",
    age: 31,
  },
  {
    firstName: "Mariam",
    lastName: "Levy",
    age: 32,
  },
];

// all routes in here are starting with /users
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

export default router;
