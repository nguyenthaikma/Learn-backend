const express = require("express");
const { createCustomerApi } = require("../controllers/customer");
const customerRoutes = express.Router();

customerRoutes.post("/", createCustomerApi);

module.exports = customerRoutes;
