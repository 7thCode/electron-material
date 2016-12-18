/**!
 Copyright (c) 2016 7thCode.(http://seventh-code.com/)
 This software is released under the MIT License.
 //opensource.org/licenses/mit-license.php
 */

"use strict";

const {remote} = require('electron');

let Controllers = angular.module('Controllers', []);

Controllers.controller('Controller', ['$scope', '$timeout', '$mdSidenav',
    function ($scope: any, $timeout: any, $mdSidenav: any): void {

        let buildToggler = (componentId: string): any => {
            return () => {
                $mdSidenav(componentId).toggle();
            }
        };

        $scope.toggleLeft = buildToggler('left');

        this.settings = {
            printLayout: true,
            showRuler: true,
            showSpellingSuggestions: true,
            presentationMode: 'edit'
        };

        this.sampleAction = function (name, ev) {
            var request = remote.require('request');
            var url = 'http://www.apple.com';

            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    $scope.message = body;
                } else {

                }
            });

            let index = remote.require('./index.js');

            let geho = index.add(1,2);

            let a = 1;

            index.open();
        };

    }]);

Controllers.config(function ($mdIconProvider) {
    $mdIconProvider.defaultIconSet('img/icons/sets/core-icons.svg', 24);
});

Controllers.filter('keyboardShortcut', function ($window) {

    return function (str) {
        if (!str) return;
        var keys = str.split('-');
        var isOSX = /Mac OS X/.test($window.navigator.userAgent);

        var seperator = (!isOSX || keys.length > 2) ? '+' : '';

        var abbreviations = {
            M: isOSX ? '' : 'Ctrl',
            A: isOSX ? 'Option' : 'Alt',
            S: 'Shift'
        };

        return keys.map(function (key, index) {
            var last = index == keys.length - 1;
            return last ? key : abbreviations[key];
        }).join(seperator);


    };

});