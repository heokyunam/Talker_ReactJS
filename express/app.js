var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var Talk = require('./models/talk');

//COR에러를 발생하지 않게 하기 위해 처리한다
app.use(cors());
//bodyParser를 추가한다
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = 8080;

//routes/index에서 Talk을 처리한다
var router = require('./routes')(app, Talk);
//RESTAPI 서버를 연다
var server = app.listen(port, function() {
	console.log('server starts, port : ', port);
});

//mongoose를 통해 몽고디비와 연결한다
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	console.log('connected to mongod server');
});

mongoose.connect('mongodb://localhost/talker');