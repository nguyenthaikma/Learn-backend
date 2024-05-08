const User = require("../models/user");

const getAllUser = async () => {
  try {
    const result = await User.find({}).exec();
    return result;
  } catch (err) {
    return err;
  }
};

const getOneUser = async (id) => { 
  try {
    const result = await User.findById(id).exec();
    return result;
  } catch (err) {
    return err;
  }
};

const register = async (data, { onSuccess, onError }) => {
  try {
    await User.create(data);
    if (onSuccess) {
      onSuccess(result);
    }
    return result;
  } catch (err) {
    if (onError) {
      onError(err);
    }
    return err;
  }
};

const edit = async (data, { onSuccess, onError }) => {
  try {
    const { id, ...rest } = data;
    const result = await User.updateOne({ _id: id }, { ...rest });
    if (onSuccess) {
      onSuccess(result);
    }
    return result;
  } catch (err) {
    if (onError) {
      onError(err);
    }
    return err;
  }
};

const deleteUser = async ({ id }, { onSuccess, onError }) => {
  try {
    const result = await User.deleteOne({ _id: id });
    if (onSuccess) {
      onSuccess(result);
    }
    return result;
  } catch (err) {
    if (onError) {
      onError(err);
    }
    return err;
  }
};

module.exports = {
  getAllUser,
  getOneUser,
  register,
  deleteUser,
  edit,
};
