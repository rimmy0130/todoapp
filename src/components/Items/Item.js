import React, {useState} from 'react';
import './Item.css'

function Item({todo, changeStatus, setTitle, onDelete}){


    return (
        <div className="item-box">
            <div className="itemCheck">
                <input type="checkbox" id="completedChk" className="itemInputCheck" checked={todo.isCompleted} onChange={(e)=>{changeStatus(e, todo)}}/>
            </div>
            <div className="itemContent">
                <div className="contentHeader">
                    <div className="itemTitle">
                        <input className="titleInput" defaultValue={todo.title} onBlur={(e)=>{setTitle(e, todo)}}/>
                    </div>
                    <div className="itemDel" onClick={(e)=>{onDelete(e, todo)}}><i className="far fa-trash-alt"></i></div>
                </div>
                <div className="itemCreatedby">작성자 | {todo.modifiedByName}</div>
            </div>
        </div>
    );
}

export default Item;