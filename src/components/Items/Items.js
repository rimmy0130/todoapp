import React from 'react';
import './Items.css'
import Item from './Item.js'

function Items({todos, changeStatus, setTitle, onDelete}){
    return (
        <div className="items-box">
            {todos.map(todo=>{
                return(
                    <Item key={todo.id} todo={todo} changeStatus={changeStatus} setTitle={setTitle} onDelete={onDelete}/>
                )
            })}
        </div>
    );
}

export default Items;