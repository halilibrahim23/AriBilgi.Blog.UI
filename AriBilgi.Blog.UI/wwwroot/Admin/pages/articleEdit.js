var app = angular.module('ArticleEditApp', []);

app.controller("ArticleEditController", function ($scope, $http) {


    angular.element(document).ready(function () {
        $scope.ArticleGet();
    });


    $scope.GetUrlParameter = function (parmeterName) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        }
        else {
            return result;
        }
    }

    $scope.ArticleGet = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleGet",
            data: { id: $scope.GetUrlParameter("Id") }
        }).then(function (d) {
            $scope.category = d.data.data;
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }



    $scope.ArticleEdit = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleUpdate",
            data: $scope.article
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});