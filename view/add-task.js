import { InsertPosition, Text } from "../js/constant.js";
import { createElement, renderElement } from "../js/util.js";
import FormComponent from './form-template.js';


export default class AddTaskComponent {
    constructor(taskService) {
        this._taskService = taskService;
    }

    _getTemplate() {
        return (
            `
            <section class="add-task">
        <h2 class="visually-hidden">Добавить задачу</h2>
        </secttion>
            `
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

        this._formComponent = new FormComponent(this._taskService, Text.NEW_TASK);


        renderElement(this.getElement(), this._formComponent.getElement(), InsertPosition.BEFOREEND);
    }
}