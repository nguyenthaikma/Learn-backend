const { getAllUser, deleteUser, register } = require("../services/CRUD");

const getUsersApi = async (req, res) => {
  const result = await getAllUser();

  return res.status(200).json({
    statusCode: 200,
    errorCode: 0,
    data: result,
  });
};

const createUserApi = async (req, res) => {
  const data = req.body;
  const result = await register(data);

  return res.status(200).json({
    statusCode: 200,
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  getUsersApi,
  createUserApi,
};
