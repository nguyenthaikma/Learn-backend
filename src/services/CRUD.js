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

const register = async (data, options) => {
  const onSuccess = options?.onSuccess;
  const onError = options?.onError;
  try {
    const result = await User.create(data);
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

const edit = async (data, options) => {
  const onSuccess = options?.onSuccess;
  const onError = options?.onError;
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

const deleteUser = async ({ id }, options) => {
  const onSuccess = options?.onSuccess;
  const onError = options?.onError;
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
