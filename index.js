let express = require('express');
let app = express();
 
app.get('/', function (req, res) {
	console.log(req.path,req.query)
	res.send('Hello World!项老板'+Date.now());
})
 
let server = app.listen(80, function () {
	let host = server.address().address;
	let port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port);
})