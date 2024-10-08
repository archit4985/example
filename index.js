require("dotenv").config();
require("./src/config/db.config");
const express = require("express");
const app = express();

app.use(express.json());

const indexRoute = require("./src/index.route");

app.use("/v1", indexRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
