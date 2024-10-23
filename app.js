/* eslint-disable no-unused-vars */
let todos = [];

function addTodo() {
    const input = document.getElementById('todo-input');
    if (input.value.trim() !== '') {
        todos.push(input.value.trim());
        input.value = '';
        renderTodos();
    }
}

function removeTodo(index) {
    todos.splice(index, 1);//Remove the todo at the specified index
    renderTodos();//Re-render the todo list
}

function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo;

        //create a remove button for each todo
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Delete';
        removeBtn.style.marginLeft = '10px';
        removeBtn.style.color = 'red';
        removeBtn.onclick = function () {
            removeTodo(index);
        }
        listItem.appendChild(removeBtn);

        list.appendChild(listItem);
    });
}