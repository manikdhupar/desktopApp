const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow, Menu } = electron;

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
	// Build menu from template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert Menu
	Menu.setApplicationMenu(mainMenu);
});

// menu templete

let mainMenuTemplate = [
	{
		label: 'File'
	}
];
