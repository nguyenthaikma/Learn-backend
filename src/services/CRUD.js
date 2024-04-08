const connection = require("../config/database");

const getAllUser = async () => {
  try {
    const [result] = await connection.query("SELECT * FROM Users");
    return result;
  } catch (err) {
    return err;
  }
};

const getOneUser = async (id) => {
  try {
    const [result] = await connection.query(
      `SELECT * FROM Users WHERE id = ?`,
      [id]
    );
    return result;
  } catch (err) {
    return err;
  }
};

const register = async (data, { onSuccess, onError }) => {
  try {
    const [result] = await connection.query(
      `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
      [data?.email, data?.name, data?.city]
    );
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
    const [result] = await connection.query(
      `UPDATE Users 
        SET email = ?, name = ?, city = ?
        WHERE id = ?`,
      [data?.email, data?.name, data?.city, data?.id]
    );
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
    const [result] = await connection.query(
      `DELETE FROM Users 
        WHERE id = ?`,
      [id]
    );
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
