const app = angular.module("myApp", []);
/* global app, $ */
app.controller("countryController", [
  "$scope",
  "$http",
  function($scope, $http) {
    $scope.countryName = null;
    $scope.lat = null;
    $scope.lon = null;
    $scope.message = null;

    $scope.getLocation = function() {
      $scope.countryName = $("#getlocate")[0].value;
      $http
        .get(`http://localhost:3000/api/location/country/${$scope.countryName}`)
        .then((response) => {
          $scope.countryName = response.countryName;
          $scope.lat = response.latitude;
          $scope.lon = response.longitude;
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
