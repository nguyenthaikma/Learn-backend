const express = require("express");
const { getEdit, postEdit } = require("../controllers/editController");
const { deleteUserById } = require("../controllers/homeController");
const router = express.Router();

router.get("/:id", getEdit);
router.post("/post-edit", postEdit);
router.post("/delete", deleteUserById);

module.exports = router;
