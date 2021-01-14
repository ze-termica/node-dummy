const path = require("path");

let app = require('./app.js');

process.on('unhandledRejection', err => {
	console.error(new Date(), ' custom unhandledRejection', err);
	return;
});

// If you need test with https please uncomment these lines and accept the localhost keys as trust certificate
/* 
let fs = require('fs');
let options = {
	key: fs.readFileSync(path.resolve(__dirname, "../keys/localhost.key")),
	cert: fs.readFileSync(path.resolve(__dirname, "../keys/localhost.crt")),
};
let https = require('https');
https.createServer(options, app).listen(process.env.PORT, function () {
	console.log('Server started');
	console.log('PORT: ' + process.env.PORT);
	console.log('NODE_ENV: ', process.env.NODE_ENV);
	console.log('—'.repeat(80));
});
*/

let http = require('http');
http.createServer({}, app).listen(process.env.PORT, function () {
	console.log('Server started');
	console.log('PORT: ' + process.env.PORT);
	console.log('NODE_ENV: ', process.env.NODE_ENV);
	console.log('—'.repeat(80));
});