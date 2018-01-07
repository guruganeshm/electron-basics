const   { app, BrowserWindow } = require('electron');
const   path = require('path');
let     mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200, 
        height: 700,
        show: false,
        center: true
    });
    mainWindow.loadURL('https://feelslikechatting.herokuapp.com');
    // mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
});