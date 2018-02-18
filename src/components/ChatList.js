import React, { Component } from 'react';

class ChatList extends Component {
	render() {
		const {chatList} = this.props;
		return (
			<div>
				{
					//loadData()를 통해 데이터 로딩이 되었는가?
					(chatList == null)? 
						null :
						//ChatView들의 배열로 만들어낸다
						chatList.map(chat => {
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
export default ChatList;