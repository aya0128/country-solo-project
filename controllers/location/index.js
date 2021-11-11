const express = require("express");

module.exports = (models) => {
  /**
   * Controller Logic
   */

  const getLocation = (req, res) =>
    models.locate
      .getLocation({ countryName: req.params.name })
      .then((messages) => messages.map((msg) => msg.serialize()))
      .then((messages) => res.status(200).json(messages))
      .catch((err) => res.status(400).send(err.message));

  const addCountryLocation = (req, res) =>
    models.locate
      .addCountryLocation({ country: req.body })
      .then(res.status(200).send({ message: success }))
      .catch((err) => res.status(400).send(err.message));

  const success = "成功しました！";

  /**
   * Routes
   */
  const router = express.Router();
  router.get("/name/:name", getLocation);
  router.post("/country", addCountryLocation);

  return router;
};
