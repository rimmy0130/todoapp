
exports.createBindTodos = (result, setTodos, setCompltedTodos) => {
    result.todos = result.todos.reverse();
    var todos = result.todos.filter(todo=>{return (!todo.status && todo.flag === "");})
    var compltedTodos = result.todos.filter(todo=>{return todo.status !== null && todo.flag === ""})
    setTodos(todos);
    setCompltedTodos(compltedTodos);
}

// export default {createBindTodos};