var app = angular.module('CategoryApp', []);

app.controller("CategoryController", function ($scope, $http) {

    $scope.GetCategoryList = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Category/CategoryGetList",
        }).then(function (d) {
            $scope.CategoryList = d.data.data;
            angular.element(document).ready(function () {
                $("#dtCategory").DataTable({
                    "language": {
                        "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/tr.json"
                    }
                });
            });
        });
    }

    $scope.GetCategoryList();


    $scope.CategoryDelete = function (id) {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:44309/Api/Category/CategoryRemove",
            data: { id: id }
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.GetCategoryList();
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }



});