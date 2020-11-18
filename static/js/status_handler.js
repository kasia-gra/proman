import {dataHandler} from "./data_handler.js";
import {htmlCreator} from "./html_creator.js";
import {dragCardsHandler} from "./drag_cards_handler.js";
import {util} from "./util.js"

export const statusesHandler = {
    manager: this,
    addListener: {
        renameStatus: function () {
            document.addEventListener('click', handlers.renameStatus)
        },
        deleteStatus: function () {
            document.addEventListener('click', handlers.deleteStatus)
        },
        addNewStatus: function () {
            document.addEventListener('click', handlers.addStatus)
            document.querySelector('#save-status').addEventListener('click', handlers.saveStatus);
        }
    }
};

const handlers = {
    getModal: function () {
        return document.querySelector('#modal-create-status');
    },
    addStatus: function (e) {
        if (e.target.classList.contains('board-add-status')) {
            $('#modal-create-status').modal()
            const board = e.target.parentNode.parentNode
            const boardId = board.id.match(/\d+/)[0];
            handlers.getModal().setAttribute('board', boardId)
        }
    },
    saveStatus: function () {
        const input = document.querySelector('#new-status-title');
        if (input.value.replace(/ /g, '').toLowerCase().match(/^[0-9a-z]+$/)) {
            const boardId = handlers.getModal().getAttribute('board');
            const newStatusTitle = input.value;
            input.value = '';
            $('#modal-create-status').modal('toggle');
            //Send request to save the new status and add it to DOM
            new Promise(((resolve, reject) => {
                const newStatus = {title: newStatusTitle, board: boardId};
                dataHandler.createNewStatus(newStatus, data => data ?
                    resolve(data) : reject(new Error('Cannot save the new status. Try again?')));
            })).then(newStatus => {
                const columnsContainer = document.querySelector(`#columns-board-id-${boardId}`);
                const newStatusColumn = htmlCreator.createColumnsStatusesForBoard(newStatus.id, newStatus.title)
                columnsContainer.insertAdjacentHTML("beforeend", newStatusColumn);
                dragCardsHandler.InitCardsDragDropListeners();
            }, error => alert(error));
        } else alert('Use letters and numbers only. No big whitespace.')
    },
    renameStatus: function (e) {
        if (e.target.classList.contains('board-column-title')) {
            const status = e.target.parentNode.parentNode;
            const title = e.target;
            const statusId = util.extractId(status);
            let isTitle = false;
            title.classList.forEach(c => c.includes('title') ? isTitle = true : null);
            if (status.classList.contains('board-column') && isTitle) {
                if (!document.querySelector('#column-input')) {
                    let input = document.createElement('input');    //create input
                    input.setAttribute('id', 'column-input');
                    input.setAttribute('value', title.innerHTML);
                    input.type = 'text';
                    const oldTitle = title.innerHTML;
                    title.innerHTML = '';
                    title.appendChild(input);
                    input.focus();
                    input.select();
                    input.addEventListener('keyup', function (event) {    //add listener on input
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            let newTitle = document.getElementById('column-input').value;   //get value from input
                            if (newTitle.replace(' ', '').toLowerCase().match(/^[0-9a-z]+$/)) {
                                const dataDict = {id: statusId, title: newTitle}
                                dataHandler.editStatus(dataDict, statusData => title.innerHTML = newTitle)
                            } else alert('Use letters and numbers only. No big whitespace.')
                        } else if (event.key === 'Escape') {
                            title.innerHTML = oldTitle
                        }
                    })
                }
            }
        }
    },
    deleteStatus: function (e) {
        if (e.target.classList.contains('delete-status')) {
            const statusId = util.extractId(e.target.closest('.board-column'));
            const boardId = e.target.closest('section').id.match(/\d+$/)[0];
            const removeButton = e.target.closest('.status-remove');
            const removeIcon = removeButton.innerHTML;
            removeButton.innerHTML = `<div class='loader'></div>`
            dataHandler.deleteStatus(
                {statusId: statusId, boardId: boardId},
                (deletedStatus) => {
                    if (statusId === deletedStatus.id.toString()) {
                        document.querySelector(`.status-${statusId}`).remove();
                        removeButton.innerHTML = removeIcon;
                    } else {
                        alert('Critical error. Please contact system administrator.')
                    }
                }
            )
        }
    }
}