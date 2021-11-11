module.exports = (knex) => (params) =>
  knex("locations")
    .where("country_name", params.countryName)
    .del();
