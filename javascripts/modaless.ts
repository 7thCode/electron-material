// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Modaless、Main側のangularとは独立。
// 連携するなら通信/ファイル経由

/// <reference path="../typings/main.d.ts" />

"use strict";

var app:any = angular.module('Application', ["ngResource", 'ngMessages', 'ngAnimate', 'ngMaterial', 'ngMdIcons']);

app.controller('Controller', ["$scope", ($scope:any):void => {

    $scope.button = () => {
        $scope.field = "Hey!";
    };
    
}]);
