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
  getLocate: require("./get_locate")(knex, Locate),
});
