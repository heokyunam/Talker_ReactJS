var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var talkSchema = new Schema({
	msg: String,
	author: String,//메시지를 입력한 사람
	date : {type : Date, default : Date.now }//메시지 입력 날짜
});

module.exports = mongoose.model('talk', talkSchema);