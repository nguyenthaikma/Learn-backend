const Customer = require("../models/customer");

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

module.exports = {
  createCustomer,
};
