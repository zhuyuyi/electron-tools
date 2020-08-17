const {app, BrowserWindow} = require('electron');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1200,
        webPreferences: {
            nodeIntegration: true, // 引入node
            enableRemoteModule: true,
        },
        // frame: false,//添加这一行采用无边框窗口
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('http://localhost:7000');
    // mainWindow.loadFile('./dist/index.html');
    mainWindow.on('close', () => {
        mainWindow = null;
    });
});
