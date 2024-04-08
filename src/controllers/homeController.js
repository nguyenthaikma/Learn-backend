const { getAllUser, deleteUser } = require("../services/CRUD");

const getHome = async (req, res) => {
  const result = await getAllUser();
  res.render("home.ejs", { listUsers: result });
};

const getDelete = async (req, res) => {
  res.send("DELETE SUCCESS");
};

const deleteUserById = async (req, res) => {  
  deleteUser(req.body, {
    onSuccess: () => {
      res.send("DELETE USER SUCCESS");
    },
    onError: (err) => {
      res.send(JSON.stringify(err));
    },
  });
};

module.exports = {
  getHome,
  deleteUserById,
};
