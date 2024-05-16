const {
  createCustomer,
  createCustomers,
  getAllCustomers,
} = require("../services/customer");

const getAllCustomerApi = async (req, res) => {
  const { query } = req;
  const result = await getAllCustomers(query);

  if (result.isError) {
    return res.status(400).json({
      statusCode: 400,
      errorCode: 1,
      data: result.response,
    });
  }

  return res.status(200).json({
    statusCode: 200,
    errorCode: 0,
    total: result.total,
    data: result.response,
  });
};

const createCustomerApi = async (req, res) => {
  const result = await createCustomer(req.body);

  if (result.isError) {
    return res.status(400).json({
      statusCode: 400,
      errorCode: 1,
      data: result.response,
    });
  }

  return res.status(200).json({
    statusCode: 200,
    errorCode: 0,
    data: result.response,
  });
};

const createCustomersApi = async (req, res) => {
  const result = await createCustomers(req.body);

  if (result.isError) {
    return res.status(400).json({
      statusCode: 400,
      errorCode: 1,
      data: result.response,
    });
  }

  return res.status(200).json({
    statusCode: 200,
    errorCode: 0,
    data: result.response,
  });
};

module.exports = {
  createCustomerApi,
  createCustomersApi,
  getAllCustomerApi,
};
