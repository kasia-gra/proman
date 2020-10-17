import {dataHandler} from "./data_handler.js";

export let dragCardsHandler = {

    InitCardsDragDropListeners: function () {
        const draggables = document.querySelectorAll('.card')
        const containers = document.querySelectorAll('.board-column-content')
        allowCardsDragging(draggables);
        swapCards(containers);
    }
}


const getDragAfterElement = function (container, y) {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child}
        } else {
            return closest
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element
}

const allowCardsDragging = function (draggables) {
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
        })
    })
}

const swapCards = function (containers) {
    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging');
            draggable.parentElement.classList.add("origin_container");
            const boardIdOfDraggable = draggable.closest('section').id.match(/\d+$/)[0];
            const boardIdOfDropContainer = container.closest('section').id.match(/\d+$/)[0];
            changeCardsOrderOnDragOver(container, boardIdOfDraggable, boardIdOfDropContainer,
                                             afterElement, draggable);
        })
        container.addEventListener('drop', e => {
            const draggable = document.querySelector('.dragging')
            const draggableCardOriginContainer = document.querySelector('.origin_container');
            const droppedContainer = draggable.parentElement;
            saveDataOfUpdatedContainers(draggableCardOriginContainer, droppedContainer);
            draggableCardOriginContainer.classList.remove("origin_container");

        })
    })
}


const changeCardsOrderOnDragOver = function (container, boardIdOfDraggable, boardIdOfDropContainer,
                                             afterElement, draggable) {
    if (boardIdOfDraggable == boardIdOfDropContainer) {
        if (afterElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement);
        }
    }
}


const saveDataOfUpdatedContainers = function (draggableCardOriginContainer, container) {
    let cardsInOriginContainer = [];
    let cardsDropContainer = [];
    const dropContainerStatusId = container.parentElement.className.match(/\d+$/)[0];;
    const originContainerStatusId = draggableCardOriginContainer.parentElement.className.match(/\d+$/)[0];
    for (let card of draggableCardOriginContainer.children) {
        cardsInOriginContainer.push(card.id);
    }
    for (let card of container.children) {
        cardsDropContainer.push(card.id);
    }
    const cardsStatusesToUpdate = {
        cards_origin: cardsInOriginContainer, status_origin: originContainerStatusId,
        cards_dropped: cardsDropContainer, status_dropped: dropContainerStatusId
    };
    dataHandler.changeCardsStatuses(cardsStatusesToUpdate, function () {
        console.log("")
    });
}
