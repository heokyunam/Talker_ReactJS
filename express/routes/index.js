module.exports = function(app, Talk)
{
	//채팅 히스토리를 불러오는 API다
	app.get('/check/:id/', function(req, res) {
		Talk.find(function(err, talks) {
			if(err) 
				return res.status(500).send({error:'database failure'});
			res.json(talks);
		}).sort({date:-1});
	});
	
	//채팅을 추가하고 싶을 때 사용하는 API다
	app.post('/talk/:id', function(req, res) {
		//Talk에 대한 데이터는 models/talk.js에 포함되어 있다
		var talk = new Talk();
		
		//console.log(req.body);
		if(req.body.msg == null || req.body.date == null) {
			//500 에러 스테이터스. 리퀘스트 바디가 제대로 입력이 되지 않은경우
			res.status(500).send('no req params');
			return;
		}
		
		talk.author = req.params.id;
		talk.msg = req.body.msg;
		talk.date = req.body.date;
		
		//해당 데이터를 디비에 저장하도록 한다
		talk.save(function(err) {
			if(err) {
				console.error(err);
				res.json({result:0});
				return;
			}
			res.json({result:1});
		});
	});
}