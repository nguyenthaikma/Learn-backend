const express = require("express");
const { getUsersApi, createUserApi } = require("../controllers/apiController");
const apiRoutes = express.Router();

apiRoutes.get("/", getUsersApi);
apiRoutes.post("/", createUserApi);

module.exports = apiRoutes;
