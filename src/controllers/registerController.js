const { register } = require("../services/CRUD");

const postRegister = (req, res) => {
  const data = req.body;
  register(data, {
    onSuccess: () => {
      res.send("CREATE USER SUCCESS");
    },
    onError: (err) => {
      res.send(JSON.stringify(err));
    },
  });
};

const getRegister = (req, res) => {
  res.render("register.ejs");
};

module.exports = {
  postRegister,
  getRegister,
};
