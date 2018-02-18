import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import User from './components/User';
import './App.css';
import axios from 'axios';

class App extends Component {
	//테스트를 할때에는 nodejs서버와 같은 주소이기 때문에
	//디폴트데이터는 로컬호스트로 처리한다.
	//하지만 실제로 사용할때에는 nodejs와 react가 따로 돌기때문에 주의해야한다
	state = {
		ip: 'http://localhost:8080',
		author: 'unknown',
		chatText: 'hello',
		chatList: null
	}
	componentDidMount() {
		if(this.state.chatList == null) {
			this._loadData();
		}
	}
  //채팅 입력 클래스 : Chat
  //채팅 히스토리 : ChatList
  render() {
	  const {chatText, author, chatList} = this.state; 
    return (
      <div className="App">
				<User onUpdateName={this._onUpdateName}
							defaultValue={author} />
				<br />
				<Chat onChat={this._onChat}
						onUpdate={this._onUpdate}
						defaultValue={chatText}/>
				<br />
        <ChatList chatList={chatList}/>
      </div>
    );
  }
	
	//입력버튼을 처리한 경우 처리하는 방식이다
  _onChat = () => {
		const {ip, author, chatText} = this.state;
		//axios는 POST를 도와주는 API다./ fetch는 body값을 입력하는게 잘 안되서 바꿨다
		axios.post(
			ip + '/talk/' + author, 
		{
			msg:chatText,
			date:Date.now()
		})
		.then(res => this._loadData())
		.catch(err => console.error(err));
  }
	
	//state는 app.js에 있으므로 함수를 매개변수로 보내주어
	//state에 접근이 가능하도록 한다
  _onUpdate = (chatText) => {
	  this.setState({
		  chatText:chatText
	  });
	}
	
	_onUpdateName = (authorName) => {
		this.setState({
			author:authorName
		})
	}

	_loadData = () => {		
		//채팅 데이터에 대한 데이터를 nodejs restapi서버로부터 가져온다
		//axios : get, post를 도와주는 api / fetch는 이상하게 자꾸 안됨
		const {ip, author} = this.state; 
		axios.get(ip + '/check/' + author)
		.then(res => {
			this.setState({
				chatList : res.data
			})
			setTimeout(this.loadData, 1000);//1초마다 데이터를 갱신해준다
		});
	}
}

export default App;
