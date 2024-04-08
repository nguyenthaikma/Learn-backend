const express = require("express");
const { postRegister, getRegister } = require("../controllers/registerController");
const router = express.Router();

router.post("/action-register", postRegister);
router.get("/", getRegister);

module.exports = router;
