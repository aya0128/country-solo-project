const Locate = function(dbLocation) {
  this.countryName = dbLocation.countryName;
  this.lat = dbLocation.lat;
  this.lon = dbLocation.lon;
};

Locate.prototype.serialize = function() {
  return {
    id: this.id,
    code1: this.code1,
    code2: this.code2,
    countryName: this.countryName,
    latitude: this.lat,
    longitude: this.lon,
  };
};

module.exports = (knex) => ({
  getLocate: require("./get_locate")(knex, Locate),
});
