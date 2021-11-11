const Locate = function(dbLocation) {
  this.countryName = dbLocation.country_name;
  this.lat = dbLocation.lat;
  this.lon = dbLocation.lon;
};

Locate.prototype.serialize = function() {
  return {
    countryName: this.countryName,
    latitude: this.lat,
    longitude: this.lon,
  };
};

module.exports = (knex) => ({
  getLocation: require("./get_location")(knex, Locate),
  addCountryLocation: require("./add_location")(knex),
});
