import { createElement } from "../js/util.js"


export default class  ItemTemplate {
    
  constructor (id, title, status, taskService){
    this._id = id;
    this._title = title;
    this._status = status;
    this._taskService = taskService;
  }


    _getTemplate() {    
    return (
      `
    <div class="taskboard__item task" data-id="${id}">
              <div class="task__body">
                <p class="task__view">${title}</p>
                <input class="task__input" type="text" value="${title}">
              </div>
              <button class="task__edit" type="button" aria-label="Изменить"></button>
            </div>
    `
) 
}

getElement() {
  if (!this._element) {
     this._element =createElement(this._getTemplate())
  }

  return this._element;
}
}