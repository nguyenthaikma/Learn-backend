const express = require("express");
const { createEmptyProjectApi, getAllProjectApi } = require("../controllers/projectController");
const projectRoutes = express.Router();

projectRoutes.post("/", createEmptyProjectApi);
projectRoutes.get("/", getAllProjectApi);

module.exports = projectRoutes;
