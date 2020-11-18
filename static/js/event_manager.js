import {dataHandler} from "./data_handler.js";

export const eventManager = {
    manager: this,
    addListener: {
        renameStatus: function () {
            document.addEventListener('click', handlers.renameStatus)
        },
        deleteStatus: function () {
            document.addEventListener('click', handlers.deleteStatus)
        }
    }
};

const handlers = {
    renameStatus: function (e) {
        if (e.target.classList.contains('board-column-title')) {
            const status = e.target.parentNode.parentNode;
            const title = e.target;
            let statusId;
            status.classList.forEach(c => c.includes('status') ?
                statusId = c.match(/\d+/)[0] : null);
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
            let statusId;
            e.target.parentNode.parentNode.parentNode.classList.forEach(
                c => statusId = c.match(/^status-(\d+)$/)
            );
            // noinspection JSUnusedAssignment
            statusId = statusId[1];
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
                    }
                    else {
                        alert('Critical error. Please contact system administrator.')
                    }
                }
            )
        }
    }
}
