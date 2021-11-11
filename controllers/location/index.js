const express = require("express");

module.exports = (models) => {
  /**
   * Controller Logic
   */

  const getLocation = (req, res) =>
    models.locate
      .getLocate({ countryName: req.params.name })
      .then((messages) => messages.map((msg) => msg.serialize()))
      .then((messages) => res.status(200).json(messages))
      .catch((err) => res.status(400).send(err.message));

  /**
   * Routes
   */
  const router = express.Router();
  router.get("/name/:name", getLocation);

  return router;
};
