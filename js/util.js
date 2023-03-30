import { InsertPosition } from "./constant.js";

export function renderElement(container, element, insertPosition = InsertPosition.BEFOREEND, referenceElement = undefined) {
    switch (insertPosition){
        case (InsertPosition.BEFOREEND):
            container.append(element);
            break;
        case (InsertPosition.AFTERBEGIN):
            container.prepend(element);
            break;
        case (InsertPosition.BEFOREBEGIN):
            container.insertBefore(element, referenceElement);
            break;
    }
}

export function createElement(template) {
    const element = document.createElement('div');
    element.innerHTML = template;

    return element.firstElementChild;
}

export function generateId() { 
    return Math.random().toString(36).substr(2, 9); 
}