const express = require("express");
const { getUsersApi, createUserApi, updateUserApi, deleteUserApi } = require("../controllers/apiController");
const apiRoutes = express.Router();

apiRoutes.get("/", getUsersApi);
apiRoutes.post("/", createUserApi);
apiRoutes.put("/:id", updateUserApi);
apiRoutes.delete("/:id", deleteUserApi);

module.exports = apiRoutes;
