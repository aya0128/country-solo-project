const express = require("express");

const router = express.Router();

const locationRouter = require("./location");

module.exports = (models) => {
  router.use("/location", locationRouter(models));

  return router;
};
