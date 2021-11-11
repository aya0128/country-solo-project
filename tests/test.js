/* eslint-disable no-console */
const { expect, assert } = require("chai");
const config = require("../config");
const knex = require("knex")(config.db);
const models = require("../models")(knex);

describe("users", () => {
  describe("setup", () => {
    it("has run the initial migrations", () =>
      knex("locations")
        .select()
        .catch(() => assert.fail("users table is not found.")));
  });
});
