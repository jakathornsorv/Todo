const Todo = require('./todo.js')
function todoManagement() {
    let todos = []
    function addTodo(id, desc, done) {
        todos.push(new Todo(id,desc,done))
        return todos[todos.length - 1].id
    }

    function clearTodo() {
        todos = []
    }

    function removeTodo(removeId) {
        todos = todos.filter((todo) => todo.id !== removeId)
    }

    function findTodo(searchId) {
        return todos.find((todo) => todo.od === searchId)
    }

    function getTodos() {
        return todos
    }
    function getNumberOfDone(params) {
        return todos.filter((todo) => todo.done === true).length
    }
    function getNumberOfNotDone(params) {
        return todos.filter((todo) => todo.done === false).length
    }
    function setItemToDone(doneId) {
        const doneItem = todos.find((todo) => todo.id === Number(doneId))
        if (doneItem !== undefined) {
            doneItem.setDone(true)
        }
    }
    function loadTodos(userTodos) {
        Todo.setRunningId(userTodos[userTodos.length - 1].id + 1)

        userTodos.forEach((todo) => {
            addTodo(todo.id, todo.descript, todo.done)
        });
    }

    return {
        addTodo,
        removeTodo,
        findTodo,
        getTodos,
        getNumberOfDone,
        getNumberOfNotDone,
        setItemToDone,
        loadTodos,
        clearTodo
    }

}

module.export = todoManagement