const express = require("express");
const { getHome, deleteUserById } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHome);

module.exports = router;
