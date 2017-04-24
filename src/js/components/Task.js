
export default class Task {

    constructor() {
        this.list = [];
    }

    complete(index) {
        let task = this.list[index];
        task.isComplete = !task.isComplete;
        this.render();
    }

    add(task) {
        this.list.push(task);
        this.render();
    }

    remove(index) {
        this.list.splice(index, 1);
        this.render();
    }

    render() {
        let tasks = this.list.map( (task, index) => {
            return `<li>
                ${task.text}
                ${task.isComplete
                    ? '<span class="complete-button btn btn-xs btn-success"><i class="glyphicon glyphicon-ok"></i> Completed</span>'
                    :'<span class="complete-button btn btn-xs btn-warning"><i class="glyphicon glyphicon-time"></i> Complete</span>'}
                <span class="delete-button btn btn-xs btn-danger glyphicon glyphicon-remove"></span>
            </li>`
        }).reduce( (a, b) => a + b, '');

        let tasksList = document.getElementById('tasks-list');
        tasksList.innerHTML = tasks;
    }
}
