let todoText = document.querySelector('.todo-Text');
let addBtn = document.querySelector('.AddBtn');
let taskList = document.querySelector('.task-list');
let todoList = [];
let todoItem = document.querySelector('.task-item')


addBtn.addEventListener('click', (e)=>{
e.preventDefault();
const task = todoText.value.trim();
if(task === '')return;
todoList.push(task);
todoText.value= ' ';
taskList.innerHTML = ''
for(let i = 0; i<todoList.length; i++){
    const todo = todoList[i]
    console.log(todo)
    taskList.innerHTML += `<div class="task-item"><span>${todo}</span>
                    <svg onclick="todoList.splice(${i},1), renderTask()  " class="close-menu" xmlns="http://www.w3.org/2000/svg" height="15" 
                    viewBox="0 -960 960 960" fill="white"  width="15"><path d="m256-200-56-56
                 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                     </div>
       `
}
})
function renderTask(){
    taskList.innerHTML = ''
    for(let i = 0; i<todoList.length; i++){
        const todo = todoList[i]
        console.log(todo)
        taskList.innerHTML += `<div class="task-item"><span>${todo}</span>
                        <svg onclick="todoList.splice(${i},1), renderTask()  " class="close-menu" xmlns="http://www.w3.org/2000/svg" height="15" 
                        viewBox="0 -960 960 960" fill="white"  width="15"><path d="m256-200-56-56
                     224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                         </div>
           `
    }
}