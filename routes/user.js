const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
module.exports = () => {
  router.post("/login/", userController.login);
  router.get("/all", userController.getAllUsers);
  router.get("/:userId", userController.getUserById);
  router.delete("/:userId", userController.deleteUser);
  router.post("/", userController.addUser);
  router.put("/:userId", userController.updateUser);
  return router;
};
