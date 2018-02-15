import React, { Component } from 'react';
import axios from 'axios';

class ChatList extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		chatList: null
	}
	componentDidMount() {
		this.loadData = this.loadData.bind(this);
		this.loadData();
	}
	loadData() {
		//채팅 데이터에 대한 데이터를 nodejs restapi서버로부터 가져온다
		//axios : get, post를 도와주는 api / fetch는 이상하게 자꾸 안됨
		axios.get(this.props.ip + '/check/' + this.props.author)
		.then(res => {
			this.setState({
				chatList : res.data
			})
			setTimeout(this.loadData, 1000);
		});
	}
	render() {
		return (
			<div>
				{
					//loadData()를 통해 데이터 로딩이 되었는가?
					(this.state.chatList == null)? 
						null :
						//ChatView들의 배열로 만들어낸다
						this.state.chatList.map(chat => {
							return <ChatView author={chat.author} 
												msg={chat.msg} 
												date={chat.date}
												key={chat._id} />;
						})
				}
			</div>
		);
	}
}

//말 하나 단위를 뷰로 보여줌. 굳이 컴포넌트를 쓸 필요없어서 이와 같이 했음
function ChatView({author, msg, date}) {
	return (
		<div>
			{author} :  
			{msg}
			<br />
			{date}
			<br />
		</div>
	);
}

//테스트를 할때에는 nodejs서버와 같은 주소이기 때문에
//디폴트데이터는 로컬호스트로 처리한다.
//하지만 실제로 사용할때에는 nodejs와 react가 따로 돌기때문에 주의해야한다
ChatList.defaultProps = {
	ip: 'http://localhost:8080',
	author: 'unknown'
}
export default ChatList;