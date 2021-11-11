/* global app, $ */
app.controller("CountryController", [
  "$scope",
  "$http",
  function($scope, $http) {
    $scope.user = {};

    const getLocate = function() {
      $http.get("http://localhost:3000/api/location").then((response) => {
        $scope.users = response.data;
      });
    };
  },
]);
