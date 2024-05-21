const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
  },
  { timestamps: true }
);

const projectSchema = new mongoose.Schema(
  {
    name: String,
    startDate: String,
    endDate: String,
    description: String,
  },
  { timestamps: true }
);

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  status: String,
  startDate: String,
  endDate: String,
  usersInfor: userSchema,
  projectInfor: projectSchema,
});

const Task = mongoose.model("user", taskSchema);

module.exports = Task;
