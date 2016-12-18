/**!
 Copyright (c) 2016 7thCode.(http://seventh-code.com/)
 This software is released under the MIT License.
 //opensource.org/licenses/mit-license.php
 */

/// <reference path="typings/index.d.ts" />

"use strict";

const electron = require('electron');
const app = electron.app;
let BrowserWindow = electron.BrowserWindow;
let Menu = electron.Menu;
let mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

function openWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL("file://" + __dirname + "/renderer/index.html");
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

let template = [
    {
        label: 'ReadUs',
        submenu: [
            {label: 'Quit', accelerator: 'Command+Q', click: function () {app.quit();}}
        ]
    }, {
        label: 'File',
        submenu: [
            {label: 'Open', accelerator: 'Command+O', click: function() {
                // 「ファイルを開く」ダイアログの呼び出し
                require('dialog').showOpenDialog({ properties: ['openDirectory']}, function (baseDir){

                });
            }}
        ]
    }, {
        label: 'View',
        submenu: [
            { label: 'Reload', accelerator: 'Command+R', click: function() { BrowserWindow.getFocusedWindow().reloadIgnoringCache(); } },
            { label: 'Toggle DevTools', accelerator: 'Alt+Command+I', click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); } }
        ]
    }
];

let menu = Menu.buildFromTemplate(template);

app.on('ready', function () {

    Menu.setApplicationMenu(menu);
    openWindow();





});





var count = 0;
module.exports = {
    add: function (v1, v2) {
        return v1 + v2;
    },
    minus: function (v1, v2) {
        return v1 - v2;
    },
    open: function () {
        var options = {
            title: 'Message from callback',
            type: 'info',
            buttons: ['OK', 'Cancel'],
            message: 'Callback passs',
            detail: "ssss"
        };

        const {dialog} = require('electron');
        dialog.showOpenDialog(BrowserWindow,options);
    }


};

app.on('gpu-process-crashed', function () {
});

app.on('login', function () {
});

app.on('certificate-error', function () {
});

app.on('web-contents-created', function () {
});

app.on('browser-window-created', function () {
});

app.on('browser-window-focus', function () {
});

app.on('browser-window-blur', function () {
});

app.on('before-quit', function () {
});

app.on('will-quit', function () {
});

app.on('quit', function () {
});

//# sourceMappingURL=index.js.map