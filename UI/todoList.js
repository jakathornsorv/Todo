function todoUserInterface() {
    const todoDiv = document.getElementById('todos')

    function showToItem(newId, newDescription) {
        const listTodoDiv = document.getElementById('listTodo')
        console.log(listTodoDiv.children.length)

        const newTodoDiv = document.createElement('div')
        newTodoDiv.className = 'todoItem'
        newTodoDiv.setAttribute('id', newId)

        const newTodoItem = document.createElement('p')
        newTodoDiv.textContent = newDescription
        newTodoDiv.appendChild(newTodoItem)

        const doneButton = document.createElement('button')
        doneButton.textContent = 'not done'
        newTodoDiv.appendChild(doneButton)

        const removeButton = document.createElement('button')
        removeButton.textContent = 'remove'
        newTodoDiv.appendChild(removeButton)

        listTodoDiv.appendChild(newTodoDiv)
    }

    function showNumberOfDone(numberOfDone) {
        const doneP = document.getElementById('done')
        doneP.textContent = `Number of Done:${numberOfDone}`
    }

    function showNumberOfNotDone(numberOfNotDone) {
        const notDoneP = document.getElementById('notDone')
        notDoneP.textContent = `Number of Not Done:${numberOfNotDone}`
    }

    function removeTodoItem(removeId) {
        const removeTodoNode = document.getElementById(removeId)
        removeTodoNode.parentElement.removeChild(removeTodoNode)
    }
    return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
}

module.exports = todoUserInterface