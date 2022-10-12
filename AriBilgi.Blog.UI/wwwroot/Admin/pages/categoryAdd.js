var app = angular.module('CategoryAddApp', []);

app.controller("CategoryAddController", function ($scope, $http) {


    $scope.CategoryAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Category/CategoryAdd",
            data: $scope.category
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});