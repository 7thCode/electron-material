/**
 * Created by oda on 2016/05/19.
 */

/// <reference path="../typings/main.d.ts" />

"use strict";

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');

var app:any = angular.module('Application', ["ngResource", 'ngMessages', 'ngAnimate', 'ngMaterial', 'ngMdIcons']);

app.controller('Controller', ["$scope", ($scope:any):void => {

    $scope.modal = () => {
        const modalessPath = path.join('file://', __dirname, 'modaless.html');
        let modaless_window = new BrowserWindow({width: 400, height: 320});

        modaless_window.on('closed', function () {
            modaless_window = null
        });

        modaless_window.loadURL(modalessPath);
        modaless_window.show();
    }

}]);
