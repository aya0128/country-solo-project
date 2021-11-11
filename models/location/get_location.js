module.exports = (knex, Locate) => (params) =>
  knex
    .select("country_name", "lat", "lon")
    .table("locations")
    .where({ country_name: params.countryName })
    .then((locate) => locate.map((locate) => new Locate(locate)));
