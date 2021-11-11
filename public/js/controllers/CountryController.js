/* global app, $ */
app.controller("CountryController", [
  "$scope",
  "$http",
  function($scope, $http) {
    $scope.getUser = function(userIndex) {
      $scope.messageTarget = "user";
      $scope.currentUser = $scope.users[userIndex];
      $http
        .get(
          `http://localhost:3000/api/users/${$scope.currentUser.id}/messages?fromId=${$scope.user.id}`
        )
        .then((response) => {
          $scope.currentMessages = response.data;
        });
    };

    $scope.signIn = function() {
      const postData = { username: $("#username-input")[0].value };
      $http({
        method: "POST",
        url: "http://localhost:3000/api/users",
        data: postData,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        $scope.usernameRecieved = true;
        $scope.user = response.data;
        getUsers();
        getChannels();
      });
    };
  },
]);
