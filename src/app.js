"use strict";

const express = require("express");
const fileUpload = require("express-fileupload");
const configViewEngine = require("./config/viewEngine");
const editRoutes = require("./routes/edit");
const homeRoutes = require("./routes/home");
const registerRoutes = require("./routes/register");
const { PORT } = require("./config/const");
const connection = require("./config/database");
const apiRoutes = require("./routes/api");
const customerRoutes = require("./routes/customer");
const projectRoutes = require("./routes/project");
const app = express();

// config
configViewEngine(app);

// config upload file
app.use(fileUpload());

// Config JSON from request
app.use(express.json()); // to support JSON-encoded bodies
app.use(
  express.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

//routes
app.use("/", homeRoutes);
app.use("/register", registerRoutes);
app.use("/edit-user", editRoutes);
app.use("/v1/api", apiRoutes);
app.use("/v1/api/customer", customerRoutes);
app.use("/v1/api/project", projectRoutes);

(async () => {
  try {
    await connection();
    app.listen(PORT, process.env.HOST_NAME, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
})();
