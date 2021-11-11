module.exports = function(knex) {
  return {
    locate: require("./location")(knex),
  };
};
