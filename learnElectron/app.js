/*
 * @Author: fanzhang
 * @Date:   2016-11-15 16:07:48
 * @Last Modified by:   fanzhang
 * @Last Modified time: 2016-11-15 16:08:19
 */

'use strict';

var electron = require('electron')

electron.app.on('ready', function() {
    var mainWindow = new electron.BrowserWindow({
        width: 600,
        height: 800
    })
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})