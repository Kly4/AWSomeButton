
sniffer	= require('node-dash-button');

storage = require('node-persist');
storage.initSync();		

request = require('request');	


require('./config.js');
require('./buttons.js');


console.log(' Listening...\n');

sniffer( Object.keys(buttons) ).on("detected", function (catched_mac){
	console.log('Found the MAC Address: '+catched_mac+'\n');

	// Activate Events
	buttons[catched_mac].action(); 
});
