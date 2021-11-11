/* global app, $ */
app.controller("CountryController", [
  "$scope",
  "$http",
  function($scope, $http) {
    $scope.countryName = null;
    $scope.country.countryName = null;
    $scope.country.lat = null;
    $scope.country.lon = null;
    $scope.message = null;

    $scope.getLocation = function() {
      $scope.countryName = $("#getlocate")[0].value;
      $http
        .get(`http://localhost:3000/api/location/country/${$scope.countryName}`)
        .then((response) => {
          $scope.country.countryName = response.countryName;
          $scope.country.lat = response.latitude;
          $scope.country.lon = response.longitude;
        });
    };

    $scope.deleteCountryLocation = function() {
      $scope.countryName = $("#deleteCountry")[0].value;
      $http
        .delete(
          `http://localhost:3000/api/location/country/${$scope.countryName}`
        )
        .then((response) => {
          $scope.message = response.message;
        });
    };

    $scope.addCountryLocation = function() {
      const postData = {
        code1: $("#code1")[0].value,
        code2: $("#code2")[0].value,
        countryName: $("#countryName")[0].value,
        lat: $("#lat")[0].value,
        lon: $("#lon")[0].value,
      };
      $http({
        method: "POST",
        url: "http://localhost:3000/api/location/country",
        data: postData,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        $scope.message = response.message;
      });
    };

    $scope.patchCountry = function() {
      $scope.countryName = $("#deleteCountry")[0].value;
      const patchData = { countryName: $("#countryName")[0].value };
      $http({
        method: "PATCH",
        url: `http://localhost:3000/api/location/country/${$scope.countryName}`,
        data: patchData,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        $scope.message = response.message;
      });
    };
  },
]);
