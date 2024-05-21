const mongoose = require("mongoose");
const User = require("./user");

const customerSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    startDate: String,
    endDate: String,
    description: String,
    customerInfor: customerSchema,
    leader: userSchema,
    usersInfor: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        validate: {
          validator: async function (v) {
            const result = await User.findOne({ _id: v });
            return !!result;
          },
          message: "User is not exist",
        },
      },
    ],
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
  },
  { timestamps: true }
);

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
