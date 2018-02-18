import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chat extends Component {
	//채팅 입력 클래스 : Chat
	//하고 싶은 말을 입력하는 칸과, 입력데이터를 전송하는 칸이 나뉜다
	render() {
		const {onChat, defaultValue} = this.props;
		return (
			<div className="chat">
				원하는 말을 입력하세요
				<br />
				<input id="chatMsg" 
						defaultValue={defaultValue}
						onChange={this._onUpdate}/>
				<input type="button" 
						value='입력'
						onClick={onChat}/>
			</div>
		);
	}

	//onChange에서 매개변수를 통해 해당 타깃에 접근이 가능하다
	//매 수정때마다 App.js의 state에 접근을 해 수정을 해준다
	_onUpdate = (e) => {
		this.props.onUpdate(e.target.value);
	}
}

Chat.propTypes = {
	ip:PropTypes.string,
	author:PropTypes.string,
	defaultValue:PropTypes.string,
	//onChat: 입력버튼을 누른 경우 처리 함수
	onChat:PropTypes.func.isRequired,
	//onChat: 입력 텍스트가 수정된 경우 처리 함수
	onUpdate:PropTypes.func.isRequired
}
export default Chat;
