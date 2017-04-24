import '../sass/style.scss';
import  Task from './components/Task.js';


let addButton = document.getElementById('add-button');
let tasksList = new Task();
let newTask = document.getElementById('new-task');
let deleteButton = document.querySelector('.delete-button');
let tasksListContainer = document.getElementById('tasks-list');

addButton.addEventListener('click', event => {
    event.preventDefault();
    tasksList.add(newTask.value);
    newTask.value = '';
});

tasksListContainer.addEventListener('click', e => {
    if (e.target.classList[0] === 'delete-button') {
        let containerList = document.getElementById('tasks-list'),
            listItem      = e.target.parentElement,
            listItems     = [...containerList.querySelectorAll('li')],
            index         = listItems.indexOf(listItem);
        tasksList.remove(index);
    }
});
