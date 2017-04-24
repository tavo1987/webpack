
export default class Task {

    constructor() {
        this.list = [];
        this.isComplete = false;
    }

    complete() {
        this.isComplete = !this.isComplete;
    }

    add(task) {
        this.list.push(task);
        this.render();
    }

    remove(index) {
        console.log(index);
        this.list.splice(index, 1);
        this.render();
    }

    render() {
        let tasks = this.list.map( (task, index) => `
            <li>
                ${task}
                <span class="index hidden">${index}</span>
                <span class="btn btn-xs btn-success">Complete</span>
                <span class="delete-button btn btn-xs btn-danger">Delete</span>
            </li>
        `).reduce( (a, b) => a + b, '');

        let tasksList = document.getElementById('tasks-list');
        tasksList.innerHTML = tasks;
    }
}
