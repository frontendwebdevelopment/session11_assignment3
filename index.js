var app = angular.module('MyApp', [])
        app.controller('MyController', function ($scope, $window) {
            $scope.ShowAlert = function () {
                if (typeof ($scope.Name) == "undefined" || $scope.Name == "") {
                    $window.alert("Please enter your name!");
                    return;
                }
                $window.alert("Hello " + $scope.Name);
            }
        });