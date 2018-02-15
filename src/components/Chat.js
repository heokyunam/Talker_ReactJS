import React, { Component } from 'react';
import axios from 'axios';

class Chat extends Component {
	constructor(props) {
		super(props);
	}
	chatting() {
		//사용자가 글을 입력한 후 버튼을 누른 경우 메시지가 전송이 되어야 한다
		const chatMsg = document.getElementById('chatMsg').value;
		//axios는 POST를 도와주는 API다./ fetch는 body값을 입력하는게 잘 안되서 바꿨다
		axios.post(
			this.props.ip + '/talk/'
		 	+ this.props.author, 
		{
			msg:chatMsg,
			date:Date.now()
		}).
		catch(err => console.error(err));
	}
	render() {
		return (
			<div className="chat">
				원하는 말을 입력하세요
				<br />
				<input id="chatMsg" defaultValue="hello"/>
				<input type="button" value="입력" onClick={this.chatting.bind(this)}/>
			</div>
		);
	}
}

//테스트를 할때에는 nodejs서버와 같은 주소이기 때문에
//디폴트데이터는 로컬호스트로 처리한다.
//하지만 실제로 사용할때에는 nodejs와 react가 따로 돌기때문에 주의해야한다
Chat.defaultProps = {
	ip: 'http://localhost:8080',
	author: 'unknown'
}

export default Chat;
