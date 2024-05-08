"use strict";

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const editRoutes = require("./routes/edit");
const homeRoutes = require("./routes/home");
const registerRoutes = require("./routes/register");
const { PORT } = require("./config/const");
const connection = require("./config/database");
const apiRoutes = require("./routes/api");
const app = express();

// config
configViewEngine(app);

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


