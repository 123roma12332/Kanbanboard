export const InsertPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};

export const Status = {
    BACKLOG: 'backlog',
    PROCESSING: 'processing',
    DONE: 'done',
    BASKET: 'basket',
};

export const Text = {
    NEW_TASK: 'Новая задача',
    EMPTY_TASK: 'Перетащите карточку',
    EMPTY_BASKET: 'Корзина пуста',

}

export const StateActions = {
    TASK_CREATE: 'task-create',
    TASK_UPDATE_TITLE: 'task-update-title',
    TASK_UPDATE_POSITION: 'task-update-position',
    TASK_DELETE: 'task-delete',
    BASKET_CLEANUP: 'basket-cleanup',
    ELEMENT_DRAGOVER: 'elementDragover',
    ELEMENT_EDITED: 'elementEdited',
};

export const StatusLabel = {
    [Status.BACKLOG]: "Backlog",
    [Status.PROCESSING]: "Processing",
    [Status.DONE]: "Done",
    [Status.BASKET]: "Basket"
}