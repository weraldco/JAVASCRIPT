const storeArr = JSON.parse(localStorage.getItem('todo-data')) || 0;
// const storeObjectArr = [];
let addButtonElement = document.querySelector('.add-button');

renderTodoList()

function renderTodoList() {
    const divContainerElement = document.querySelector('.todo-list-container');
      
    let html ='';
        storeArr.forEach((todoObject, index) =>{
            
            const { name, date } = todoObject;
            html += `
                <div>${name}</div>
                <div>${date}</div>
                <div><button class='delete-button'>Delete</button></div>
            `;
        });
        
    
    divContainerElement.innerHTML = html;
    
    document.querySelectorAll('.delete-button')
    .forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click',() => {
            deleteTodo(index);
        })
    });
}

function deleteTodo(i){
    storeArr.splice(i,1)
    localStorage.setItem('todo-data',JSON.stringify(storeArr))
    renderTodoList()
}

addButtonElement.addEventListener('click', addTodo)

function addTodo() {
    const nameElement = document.querySelector('.js-todo-name');
    const dueDateElement = document.querySelector('.js-due-date');
    const name = nameElement.value;
    const date = dueDateElement.value;
    
    storeArr.push({name , date});

    localStorage.setItem('todo-data',JSON.stringify(storeArr))

    nameElement.value = '';

    renderTodoList()
}
