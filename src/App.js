import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './components/Chat';
import ChatList from './components/ChatList';
import './App.css';

class App extends Component {
  //채팅 입력 클래스 : Chat
  //채팅 히스토리 : ChatList
  render() {
    return (
      <div className="App">
		    <Chat />
        <ChatList />
      </div>
    );
  }
}

export default App;
