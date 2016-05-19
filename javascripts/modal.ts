// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

/// <reference path="../typings/main.d.ts" />

"use strict";

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');

var app:any = angular.module('Application', ["ngResource", 'ngMessages', 'ngAnimate', 'ngMaterial', 'ngMdIcons']);

app.controller('Controller', ["$scope",
    ($scope:any):void => {
        

    }]);