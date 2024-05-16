const express = require("express");
const { createCustomerApi, createCustomersApi, getAllCustomerApi } = require("../controllers/customer");
const customerRoutes = express.Router();

customerRoutes.get("/", getAllCustomerApi);
customerRoutes.post("/", createCustomerApi);
customerRoutes.post("/create-many", createCustomersApi);

module.exports = customerRoutes;
