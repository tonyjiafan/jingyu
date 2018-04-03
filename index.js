'use strict'
const  express = require('express'),
		   bodyParser = require('body-parser'),
       path = require('path'),
		   app = express();

//请求主体解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(5000,function(){
	console.log('服务启动了 =====> http://localhost:5000')
});
