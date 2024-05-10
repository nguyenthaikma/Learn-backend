const { getAllUser, deleteUser, register, edit } = require("../services/CRUD");
const { uploadFile } = require("../services/upload");

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

const uploadFileApi = async (req, res) => {
  const result = await uploadFile(req.files);
  if (result.errorCode == 400) {
    return res.status(400).json({
      statusCode: 400,
      errorCode: 1,
      response: result,
    });
  }
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
  uploadFileApi,
};
