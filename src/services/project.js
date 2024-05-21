const Project = require("../models/project");

const getAllProject = async (query) => {
  try {
    const limit = query?.limit;
    const page = query?.page;
    const skip = limit * page - limit;

    const result = await Project.find({}).populate('usersInfor').limit(limit).skip(skip).exec();
    return {
      isError: 0,
      response: result,
    };
  } catch (err) {
    return {
      isError: 1,
      response: err,
    };
  }
};

const createEmptyProject = async (data) => {
  try {
    let result;
    if (data.type === "EMPTY_PROJECT") {
      result = await Project.create(data);
    }
    if (data.type === "PUSH_USER") {
      const project = await Project.findById(data.project).exec();
      for (let user of data.usersInfor) {
        project.usersInfor.push(user);
      }
      result = await project.save();
    }
    return {
      isError: 0,
      response: result,
    };
  } catch (err) {
    return {
      isError: 1,
      response: err,
    };
  }
};

module.exports = {
  createEmptyProject,
  getAllProject,
};
