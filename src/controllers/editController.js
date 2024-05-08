const { edit, getOneUser } = require("../services/CRUD");

const getEdit = async (req, res) => {
  const user = await getOneUser(req.params?.id);
  res.render("edit.ejs", { user });
};

const postEdit = (req, res) => {
  const data = req.body;
  edit(data, {
    onSuccess: () => {
      res.send("EDIT USER SUCCESS");
    },
    onError: (err) => {
      res.send(JSON.stringify(err));
    },
  });
};

module.exports = {
  getEdit,
  postEdit,
};
