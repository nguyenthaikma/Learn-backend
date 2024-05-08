const { getAllUser, deleteUser, register, edit } = require("../services/CRUD");

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

const updateUserApi = async (req, res) => {
  const data = req.body;
  const result = await edit({ id: req.params?.id, ...data });

  return res.status(200).json({
    statusCode: 200,
    errorCode: 0,
    response: result,
    data: { id: req.params?.id, ...data },
  });
};

const deleteUserApi = async (req, res) => {
  const result = await deleteUser({ id: req.params?.id });

  return res.status(200).json({
    statusCode: 200,
    errorCode: 0,
    response: result,
  });
};

module.exports = {
  getUsersApi,
  createUserApi,
  updateUserApi,
  deleteUserApi,
};
