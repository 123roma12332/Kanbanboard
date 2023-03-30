import { InsertPosition, Status } from "../js/constant.js";
import { createElement, renderElement } from "../js/util.js";
import ListComponent from "./list-component.js";

export default class BoardComponent {
    constructor(taskService) {
        this._taskService = taskService;
    }

    _getTemplate() {
        return (
            `<section class="taskboard">
        <h2 class="visually-hidden">Ваши задачи:</h2>
        </section>`
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
        Object.values(Status).forEach((status) => {
            const listComponent = new ListComponent(this._taskService, status);
            const listElement = listComponent.getElement();
            renderElement(this.getElement(), listElement, InsertPosition.BEFOREEND);
        });
    }
}