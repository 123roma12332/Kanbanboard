// import  ItemTemplate from "../view/item-template.js";
// import FormTemplate from "../view/form-template.js";
// import { createProcessingTemplate } from "../view/list-processing.js";
// import { createDoneTemplate } from "../view/list-done.js";
// import { createBasket } from "../view/basket-template.js";
import TaskService from "../services/task-service.js";
import AddTaskComponent from "../view/add-task.js";
import BoardComponent from "../view/board-component.js";
import HeaderComponent from "../view/header-component.js";
import { InsertPosition } from "./constant.js";
import { tasks } from "./data.js";
import { renderElement } from "./util.js";



const boardAppInnerElement = document.querySelector('main > div.board-app__inner')

const headerComponent = new HeaderComponent('Канбан-доска');
const headerElement = headerComponent.getElement();
const bodyElement = document.querySelector('.board-app');
renderElement(bodyElement, headerElement, InsertPosition.AFTERBEGIN);



const taskService = new TaskService(tasks)
const boardComponent = new BoardComponent(taskService);
const boardElement = boardComponent.getElement();

renderElement(boardAppInnerElement, boardElement, InsertPosition.BEFOREEND)

const addTaskComponent = new AddTaskComponent(taskService)
const addTaskElement = addTaskComponent.getElement();
renderElement(boardAppInnerElement, addTaskElement, InsertPosition.AFTERBEGIN)




// const board = document.querySelector('.board-app__inner')
// const taskBoardBacklog = document.querySelector('.taskboard__group--backlog')
// const taskBoardList = taskBoardBacklog.querySelector('.taskboard__list')

//       // tasks.map(item => {
//         const itemTemplate = new ItemTemplate(item)
//         const itemElement = itemTemplate.getElement()
//         renderElement(taskBoardList, itemElement, InsertPosition.BEFOREEND)
      // })

// const itemElement = createElement(createItemTemplate(tasks[0]))
// const itemElement1 = createElement(createItemTemplate(tasks[1]))
// const itemElement2 = createElement(createItemTemplate(tasks[2]))


// renderElement(taskBoardList, itemElement, InsertPosition.BEFOREEND)
// renderElement(taskBoardList, itemElement, InsertPosition.BEFOREEND)
// renderElement(taskBoardList, itemElement, InsertPosition.BEFOREEND)
// renderElement(taskBoardList, itemElement, InsertPosition.BEFOREEND)



// taskBoardList.insertAdjacentHTML('beforeend', createItemTemplate())
// taskBoardList.insertAdjacentHTML('beforeend', createItemTemplate())
// taskBoardList.insertAdjacentHTML('beforeend', createItemTemplate())
// taskBoardList.insertAdjacentHTML('beforeend', createItemTemplate())

// console.log(backlogContainer);






// const addTaskContainer = document.querySelector('.add-task')
// addTaskContainer.insertAdjacentHTML('beforeend', FormTemplate.getElement)
// const itemElement = createElement(FormTemplate(item))
// const form = new FormTemplate(taskService, Text.NEW_TASK)
// renderElement(addTaskContainer, form.getElement(), InsertPosition.BEFOREEND)


// const taskboardProcessing = document.querySelector('.taskboard__group--processing')
// // taskboardProcessing.insertAdjacentHTML('beforeend', createProcessingTemplate())
// const sorted = taskboardProcessing.querySelector('.taskboard__list--sorted')

// tasks.map(item => {
//   const itemElement = createElement(createProcessingTemplate(item))
//   renderElement(sorted, itemElement, InsertPosition.BEFOREEND)
// })



// const taskboardDone = document.querySelector('.taskboard__group--done')
// const active = taskboardDone.querySelector('.taskboard__list--sorted')

// tasks.map(item =>{
//   const itemElement = createElement(createDoneTemplate(item))
//   renderElement(active, itemElement, InsertPosition.BEFOREEND)
// })


// const taskboardBasket = document.querySelector('.taskboard__group--basket')
// const trashList = taskboardBasket.querySelector('.taskboard__list--trash')
// // trashList.insertAdjacentHTML('beforeend', createBasket())
// renderElement(trashList, createElement(createBasket()))


// const itemElement = createElement(createBasket(item))
// renderElement(trashList, itemElement, InsertPosition.BEFOREEND)