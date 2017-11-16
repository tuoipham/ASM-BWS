var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.user = '';
    $scope.Password = '';
    $scope.email = '';
    $scope.fullname = '';
    $scope.RePassword = '';
});