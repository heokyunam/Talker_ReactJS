import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
	//채팅 입력 클래스 : Chat
	//하고 싶은 말을 입력하는 칸과, 입력데이터를 전송하는 칸이 나뉜다
	render() {
        const {defaultValue} = this.props;
        return (
            <div>
                자신의 이름을 작성해주세요<br/>
                <input type='text' 
                       onChange={this._onChange} 
                       value={defaultValue}/>
            </div>
        )
    }
    //App.js의 State에 접근하기 위한 함수로 사용
    _onChange = (e) => {
        this.props.onUpdateName(e.target.value);
    }
}

User.propTypes = {
    onUpdateName:PropTypes.func.isRequired,
    defaultValue:PropTypes.string.isRequired
}
export default User;