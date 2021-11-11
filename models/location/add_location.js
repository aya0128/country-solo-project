module.exports = (knex) => (params) =>
  knex
    .insert({
      code1: params.country.code1,
      code2: params.country.code2,
      country_name: params.country.countryName,
      lat: params.country.latitude,
      lon: params.country.longitude,
    })
    .into("locations");
