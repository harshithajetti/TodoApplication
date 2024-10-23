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

function renderTodos() {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach((todo) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo;
        list.appendChild(listItem);
    });
}