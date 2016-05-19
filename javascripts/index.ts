/**
 * Created by oda on 2016/05/19.
 */

/// <reference path="../typings/main.d.ts" />

"use strict";

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');

var app:any = angular.module('Application', ["ngResource", 'ngMessages', 'ngAnimate', 'ngMaterial', 'ngMdIcons']);

app.controller('Controller', ["$scope",
    ($scope:any):void => {
        
        $scope.modal = () => {
            const modalPath = path.join('file://', __dirname, 'modal.html');
            let win = new BrowserWindow({ width: 400, height: 320 });
            win.on('closed', function () { win = null });
            win.loadURL(modalPath);
            win.show();
        }
        
    }]);
