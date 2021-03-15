import React from 'react';
import './Header.css'
import UserInfo from '../UserInfo/UserInfo';
import AddTask from '../AddTask/AddTask';

function Header({userName, registerTodo, setValue, onSave}){
    return (
        <div>
        <div className="header">
            <UserInfo userName={userName} />
            <AddTask registerTodo={registerTodo} setValue={setValue} onSave={onSave}/>
        </div>
        </div>
    );
}

export default Header;