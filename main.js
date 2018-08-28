const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow, Menu } = electron;

// initializes our main window
let mainWindow;
let addWindow;

// listen for our app to be ready

app.on('ready', () => {
	// create new window
	mainWindow = new BrowserWindow({});
	// load html into window
	// file://currentDir/mainWindow.html
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

createAddWindow = () => {
	// create new window
	letWindow = new BrowserWindow({
		width: 300,
		height: 200
	});
	// load html into window
	// file://currentDir/mainWindow.html
	letWindow.loadURL(
		url.format({
			pathname: path.join(__dirname, 'addWindow.html'),
			protocol: 'file:',
			slashes: true
		})
	);
};

// menu templete

let mainMenuTemplate = [
	{
		label: 'File',
		submenu: [
			{
				label: 'Add-item',
				click() {
					createAddWindow();
				}
			},
			{
				label: 'Remove-item'
			},
			{
				label: 'Quit',
				accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
				click() {
					app.quit();
				}
			}
		]
	}
];
