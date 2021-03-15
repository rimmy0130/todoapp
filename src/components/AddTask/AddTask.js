import React, {useState} from 'react';
import '../AddTask/AddTask.css'


function AddTask({registerTodo, setValue, onSave}){

    return (
        <div className="addTask">
            <div className="taskInput">
                <input id="task" className="taskInput inputBox" onChange={setValue}/>
            </div>
            <div className="taskBtn" onClick={onSave}>저장</div>
        </div>
    );
}

export default AddTask;