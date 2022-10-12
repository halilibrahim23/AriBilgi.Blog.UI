var app = angular.module('ArticleApp', []);
app.controller("ArticleController", function ($scope, $http) {

    $scope.GetArticleList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleList",
        }).then(function (d) {
            $scope.ArticleList = d.data.data;
            angular.element(document).ready(function () {
                $("#dtArticle").DataTable({
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/tr.json"
                    }
                });
            });
        });
    }

    $scope.GetArticleList();


    $scope.ArticleDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Article/ArticleRemove",
            data: { id: id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetArticleList();
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }



});