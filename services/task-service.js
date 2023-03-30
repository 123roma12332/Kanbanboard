import { StateActions, Status } from '../js/constant.js';
import { generateId } from '../js/util.js';

export default class TaskService {
    constructor(tasks) {
        this._tasks = tasks;
    }

    create(task) {

        console.log(this._tasks.push(task));
        task.id = generateId()
        task.status = Status.BACKLOG;
        this._tasks.push(task);
        this._emitEvenet(StateActions.TASK_CREATE, task);
    }

    _emitEvenet(type, detail) {
        window.dispatchEvent(new CustomEvent(type, { detail }))
    }

    getByStatus(status) {
        return this._tasks.filter(task => task.status === status);
    }
}