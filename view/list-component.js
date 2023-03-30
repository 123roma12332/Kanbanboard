import { InsertPosition, StateActions, StatusLabel } from "../js/constant.js";
import { createElement, renderElement } from "../js/util.js";
import TaskComponent from "./task-component.js";

export default class ListComponent {
    constructor(taskService, status) {
        this._taskService = taskService;
        this._status = status;
        this._title = StatusLabel[status];
        this._tasks = this._taskService.getByStatus(status);
    }

    _getTemplate() {
        return (
            `<article class="taskboard__group taskboard__group--${this._status}">
          <h3 class="taskboard__group-heading taskboard__group-heading--${this._status}">${this._title}</h3>
          <div class="taskboard__list taskboard__list--${this._status}"> </div>
        </article>`
        )
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this._getTemplate());
            this._afterCreateElement();
        }
        return this._element;
    }

    _afterCreateElement() {
        //bu metodlari cagirmamishdin
        this._addEventListeners();
        this._renderTasks();

    }

    _addEventListeners() {
        window.addEventListener(StateActions.TASK_CREATE, this._changeDataHandler.bind(this));
    }

    _removeTasks() {
        //taskboard_list yazmishdin
        this.getElement().querySelector(".taskboard__list").innerHTML = '';
    }

    _renderTasks() {
        this._removeTasks();
        this._tasks.forEach((task) => {
            const taskItemComponent = new TaskComponent(this._taskService, task);
            const taskItemElement = taskItemComponent.getElement()
            renderElement(this.getElement().lastChild.previousElementSibling, taskItemElement, InsertPosition.BEFOREEND);
        })
    }

    _changeDataHandler() {
        this._tasks = this._taskService.getByStatus(this._status);
        this._renderTasks()
    }
}