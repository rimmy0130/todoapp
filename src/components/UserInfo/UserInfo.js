import React from 'react';
import './UserInfo.css'

function UserInfo({userName}){
    return (
        <div className="userInfo">
            <div className="userName">{userName}</div>
            <div className="namestodo"> 의 할 일</div>
        </div>

    );
}

export default UserInfo;

