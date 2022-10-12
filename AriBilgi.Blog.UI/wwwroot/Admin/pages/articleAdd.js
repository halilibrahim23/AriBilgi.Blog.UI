ar app = angular.module('ArticleAddApp', []);

app.controller("ArticleAddController", function ($scope, $http) {


    $scope.ArticleAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleAdd",
            data: $scope.article
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});