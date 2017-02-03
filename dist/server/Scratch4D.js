'use strict';

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

var _DroneHttpServer = require('./DroneHttpServer');

var _DroneHttpServer2 = _interopRequireDefault(_DroneHttpServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _electron2.default.app;
var BrowserWindow = _electron2.default.BrowserWindow;

var mainWindow = null;
var videoWindow = null;

var PORT = 3001;
var VPORT = 3002;
var server = null;

app.on('window-all-closed', function () {
	if (process.platform != 'darwin') {
		http.request({
			host: 'localhost',
			port: '3001',
			path: '/api/robots/Scratch4D/devices/drone/commands/land'
		}, function (response) {
			console.log(response);
		});
		app.quit();
	}
});

app.on('ready', function () {
	var DroneServer = new _DroneHttpServer2.default("ARDrone");
	DroneServer.start();
	mainWindow = new BrowserWindow({ width: 1920, height: 1080 });
	mainWindow.loadURL('file://' + __dirname + '/../index.html');
	mainWindow.on('closed', function () {
		http.request({
			host: 'localhost',
			port: '3001',
			path: '/api/robots/Scratch4D/devices/drone/commands/land'
		}, function (response) {
			console.log(response);
		});

		mainWindow = null;
	});
});