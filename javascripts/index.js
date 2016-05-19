/**
 * Created by oda on 2016/05/19.
 */
/// <reference path="../typings/main.d.ts" />
"use strict";
var BrowserWindow = require('electron').remote.BrowserWindow;
var path = require('path');
var app = angular.module('Application', ["ngResource", 'ngMessages', 'ngAnimate', 'ngMaterial', 'ngMdIcons']);
app.controller('Controller', ["$scope", function ($scope) {
        $scope.modal = function () {
            var modalessPath = path.join('file://', __dirname, 'modaless.html');
            var modaless_window = new BrowserWindow({ width: 400, height: 320 });
            modaless_window.on('closed', function () {
                modaless_window = null;
            });
            modaless_window.loadURL(modalessPath);
            modaless_window.show();
        };
    }]);
//# sourceMappingURL=index.js.map