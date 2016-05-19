/**
 * Created by oda on 2016/05/19.
 */
/// <reference path="../typings/main.d.ts" />
"use strict";
var BrowserWindow = require('electron').remote.BrowserWindow;
var path = require('path');
var app = angular.module('Application', ["ngResource", 'ngMessages', 'ngAnimate', 'ngMaterial', 'ngMdIcons']);
app.controller('Controller', ["$scope",
    function ($scope) {
        $scope.modal = function () {
            var modalPath = path.join('file://', __dirname, 'modal.html');
            var win = new BrowserWindow({ width: 400, height: 320 });
            win.on('closed', function () { win = null; });
            win.loadURL(modalPath);
            win.show();
        };
    }]);
//# sourceMappingURL=index.js.map