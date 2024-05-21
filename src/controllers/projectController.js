const { createEmptyProject, getAllProject } = require("../services/project");

const getAllProjectApi = async (req, res) => {
  const result = await getAllProject(req.query);

  if (result.isError) {
    return res.status(400).json({ ...result });
  }
  return res.status(200).json({ ...result });
};

const createEmptyProjectApi = async (req, res) => {
  const result = await createEmptyProject(req.body);

  if (result.isError) {
    return res.status(400).json({ ...result });
  }
  return res.status(200).json({ ...result });
};

module.exports = {
  createEmptyProjectApi,
  getAllProjectApi,
};
