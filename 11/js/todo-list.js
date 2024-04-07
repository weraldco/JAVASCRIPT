const storeArr = [{
    name:'make dishes',
    date:'02-22-12'},{
    name:'make assignment',
    date:'02-22-12'}];

renderTodoList()

function renderTodoList() {
    const divContainerElement = document.querySelector('.todo-list-container');
    
    
    let html ='';
        for (let i = 0; i < storeArr.length ;i++ ) {
            const { name, date } = storeArr[i];
            html += `
                <div>${name}</div>
                <div>${date}</div>
                <div><button onclick = "deleteTodo(${i})" class='delete-button'>Delete</button></div>
            `;
        }
    
    divContainerElement.innerHTML = html;
    
}

function deleteTodo(i){
    storeArr.splice(i,1)
    renderTodoList()
}

function addTodo() {
    const nameElement = document.querySelector('.js-todo-name');
    const dueDateElement = document.querySelector('.js-due-date');
    const name = nameElement.value;
    const date = dueDateElement.value;

    storeArr.push({name , date});

    nameElement.value = '';
    renderTodoList()
}
