const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = require("./const");

const dbState = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];

const connection = async () => {
  try {
    mongoose.connect(DB_HOST, {
      user: DB_USER,
      pass: DB_PASSWORD,
      dbName: DB_NAME,
    });
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value == state).label, "to db");
  } catch (error) {
    console.log("🚀 ~ connection ~ error:", error);
  }
};

module.exports = connection;
