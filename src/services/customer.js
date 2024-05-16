const Customer = require("../models/customer");

const getAllCustomers = async (query) => {
  try {
    const limit = query?.limit;
    const page = query?.page;
    const skip = limit * page - limit;

    const total = await Customer.count();
    const result = await Customer.find({}).limit(limit).skip(skip).exec();
    return {
      isError: 0,
      total,
      response: result,
    };
  } catch (err) {
    return {
      isError: 1,
      response: err,
    };
  }
};

const createCustomer = async (customer) => {
  try {
    const result = await Customer.create(customer);
    return {
      isError: 0,
      response: result,
    };
  } catch (err) {
    return {
      isError: 1,
      response: err,
    };
  }
};

const createCustomers = async (customers) => {
  try {
    const result = await Customer.insertMany(customers);
    return {
      isError: 0,
      response: result,
    };
  } catch (err) {
    return {
      isError: 1,
      response: err,
    };
  }
};

module.exports = {
  createCustomer,
  createCustomers,
  getAllCustomers,
};
