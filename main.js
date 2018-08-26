const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow } = electron;

// initializes our main window
let mainWindow;

// listen for our app to be ready

app.on('ready', () => {
	// create new window
	mainWindow = new BrowserWindow({});
	// load html into window
	mainWindow.loadURL(
		url.format({
			pathname: path.join(__dirname, 'mainWindow.html'),
			protocol: 'file:',
			slashes: true
		})
	);
});
