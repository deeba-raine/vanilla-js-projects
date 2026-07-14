const todoInput = document.getElementById("input")
const addButton = document.getElementById("button")
let todo;
let todoList = []
let todoContainer = document.getElementById("todo-container")

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}

addButton.addEventListener("click", (e)=> {
    e.preventDefault()
    todo = todoInput.value
    if(todo.length > 0){
          todoList.push({id : uuid(), todo, isCompleted:false})
    }
        console.log(todoList)
        createTodo(todoList)
})

function createTodo(todoList) {
    todoContainer.innerHTML = todoList.map(todo => 
        `
        <div>
            <input type="checkbox" id="item-${todo.id}">
            <label for="item-${todo.id}">${todo.todo}</label>
            <button>delete</button>
        </div>
        `
    ).join("");
}


