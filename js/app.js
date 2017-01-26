var app = angular.module('FontPicker', ['ngMaterial', 'angular.filter']);

app.controller('MainCtrl', function($scope, $http){

    $http({
        method: 'GET',
        url: 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBgkrn4aSKuvd7osUpK-KZLknuPg8_T1RQ'
    }).then(function successCallback(response) {

        $scope.fonts = response.data.items;

    }, function errorCallback(response) {
        console.log(response)
    });

    $scope.limit = 130;
    $scope.type = null;

    $scope.content = {
        textarea: 'And rumor has it she bouldered up Castle Craig!',
        font: "all",
        preview: "Ag"
    };

    $scope.activateFont = function( font ) {
        $scope.selectedFont = font;
    };

    $scope.getFont = function(_this) {
        $scope.aplliedFont = _this;
    };

    $scope.setType = function(_this) {
        $scope.type = _this.key;
    };

});