##Overview

    Webサイトをアプリケーション化するためのフレームワーク"Electron"の雛形。
    
##File Config
    
       material 
       ├── index.js                     for Browser Process
       ├── package.json                     
       └── renderer                     Contents
           ├── bower.json
           ├── index.html               View
           └── javascripts
               ├── application.js       for Renderer Process
               └── controller.js        for Renderer Process
      
      
####Browser Process(Main Thread)
      
      Node.js側？
      ElectronのAPIを使用して、主にLifeCycle管理。
      iOSアプリで言う所のAppDelegateみたいなもん。
            
####Renderer Process(Sub Thread)
            
      Cromium側？
      ユーザインターフェイス。
      iOSアプリで言う所のViewControllerみたいなもん。
            
      const {remote} = require('electron');
      
      と書けば
      
      let request = remote.require('request');
        
      と、Main ThreadでNode_modulesのモジュールを使用可能。
      
      なんかキモいが本当だ。
      
      
##Install

    npm install electron -g
   
    .
    .
    .
    
    cd material
    
    sudo npm install
    
    cd renderer
   
    bower install

##Test

    cd  material
    
    electron .

##Packaging

    cd public
    
    electron -v
    v1.4.12
        
    electron-packager . APP_NAME --platform=darwin,win32 --arch=x64 --version=1.4.12
    
    
    
    