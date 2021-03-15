//여기에 app.js 소스 옮기고
import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../context/UserContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Bar from '../components/Bar/Bar';
import Items from '../components/Items/Items';
import Header from '../components/Header/Header';
import StdLoader from '../components/Loader/StdLoader';
import CstmLoader from '../components/Loader/CstmLoader';
import Server from '../service/server';
import TopBtn from '../components/TopBtn/TopBtn';

function Todos(props) {
  //변수 선언
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [userId, setUserId] = useState('2235518'); //로컬
  const [userName, setUserName] = useState('이예림 주임'); //로컬
  const [isScroll, setIsScroll] = useState(false);
  // const [user, setUser] = useContext(UserContext);

  useEffect(()=>{ //onInit 같음
    getTodos();
  },[])


  const getTodos = async()=>{
    try {
      setLoading(true);
      // if(!user.userId || !user.userName) return props.history.push("/noauthorized");

      var access_token = await Server.getToken();
      if(!access_token) return alert("유효한 토큰이 없습니다.");

      // var res = await Server.ApiServer.get(`/api/v1/todos?targetId=${user.targetId}`, {
      var res = await Server.ApiServer.get(`/api/v1/todos?targetId=${userId}`, {
        headers: {"authorization": `Bearer ${access_token}`}
      });
      if(!res.data.success){return alert("데이터를 불러오는데 실패했습니다.")}
      createBindTodos(res.data.result);
      // setLoading(false);
      // if(!isLoaded) setIsLoaded(true);
    } catch (error) {
      return error;
    }
  }

  const createBindTodos = (result) => {
    result.todos = result.todos.reverse();
    var todos = result.todos.filter(todo=>{return !todo.isCompleted});
    var compltedTodos = result.todos.filter(todo=>{return todo.isCompleted});
    setTodos(todos);
    setCompletedTodos(compltedTodos);
  }

  const checkScroll = ()=>{
    const itemsBox = document.getElementById("itemsBox");
    setIsScroll(itemsBox.scrollTop > 0 ? true : false);
  }

   //AddTask Start
   const [todo, setTodo] = useState(null);
   const setValue = (e)=>{
       setTodo(e.target.value);
   }

   const onSave = (e)=>{
     registerTodo(todo);
   }

   const registerTodo = async(todo)=>{
       setLoading(true);
       const access_token = await Server.getToken();
       if(!access_token) return alert("유효한 토큰이 없습니다.");
       var saveData = {
          //  "From": user.userId,
           "From": userId,
          //  "To": user.targetId,
           "To": userId,
           "Todo": {"title": todo, "isCompleted": false, "isDeleted": false}
       };
       var res = await Server.ApiServer.post(`/api/v1/todos`, saveData, {
           headers: {"authorization": `Bearer ${access_token}`}
       });
       
       if(!res.data.success){setLoading(false); return alert("저장에 실패하였습니다. 다시 한 번 시도해주세요.")};
       document.getElementById("task").value = null;
       createBindTodos(res.data.result);
       setLoading(false);
   }
   //AddTask End

  //Items Start
  const changeStatus = (e, todo)=>{
    todo.isCompleted = e.target.checked
    updateTodo(todo);
  }

  const setTitle = (e, todo)=>{
    todo.title = e.target.value;
    updateTodo(todo);
  }

  const onDelete = (e, todo) =>{
    deleteTodo(todo);
  }


  const updateTodo = async(todo)=>{
    setLoading(true);
    var access_token = await Server.getToken();
    if(!access_token) return alert("유효한 토큰이 없습니다.");
    var saveData = {
        // "targetId": user.targetId,
        "targetId": userId,
        "Todo": {
            // "userId": user.userId, //접속한 사람
            "userId": userId, //접속한 사람
            "id": todo.id,        
            "title": todo.title,
            ...todo
        }
    }
    var res = await Server.ApiServer.put(`/api/v1/todos`, saveData, {
        headers: {"authorization": `Bearer ${access_token}`}
    });
    if(!res.data.success){setLoading(false); return alert("업데이트에 실패하였습니다. 다시 한 번 시도해주세요.")};
    createBindTodos(res.data.result);
    setLoading(false);
  }


  const deleteTodo = async(todo)=>{
      setLoading(true);
      var access_token = await Server.getToken();
      if(!access_token) return alert("유효한 토큰이 없습니다.");
      var res = await Server.ApiServer.delete(`/api/v1/todos`, {
          headers: {
              "authorization": `Bearer ${access_token}`, 
              // "docId": todo.id, "targetId": user.targetId, "modifiedId": user.userId
              "docId": todo.id, "targetId": userId, "modifiedId": userId
          }
      });
      if(!res.data.success){setLoading(false); return alert("삭제에 실패하였습니다. 다시 한 번 시도해주세요.")};
      createBindTodos(res.data.result);
      setLoading(false);
  }
  //Items End



  return (
    <>
      <Bar />
      {/* {!isLoaded ? <CstmLoader /> :  */}
        <>
          {loading? <CstmLoader loading={loading}/> : <></>}
          {/* <Header userName={user.targetName} registerTodo={registerTodo} setValue={setValue} onSave={onSave}/>  */}
          <Header userName={userName} registerTodo={registerTodo} setValue={setValue} onSave={onSave}/> 
          <div className="itemsBox" id="itemsBox" onScroll={checkScroll}>
            <Items todos={todos} changeStatus={changeStatus} setTitle={setTitle} onDelete={onDelete}/>
            {completedTodos.length > 0 ?
              <>
                <hr />
                <div className="labelCompleted">완료 목록</div>
                <Items todos={completedTodos} changeStatus={changeStatus} setTitle={setTitle} onDelete={onDelete}/>
              </>
              : 
              <></>
            }
          </div>
          {isScroll? <TopBtn /> : <></>}
        </>
      {/* // } */}
    </>
  );
}

export default Todos;
