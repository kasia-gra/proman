import {dataHandler} from "./data_handler.js";


export let boardsHandler = {

    createBoard: function (boardTitle, boardId) {
        return `
            <section class="board" id="board-id-${boardId}" data-board-id='${boardId}'>
                <div class="board-header" id="header-board-${boardId}">
                    <span class="board-title"><textarea class="board-title-input">${boardTitle}</textarea></span>
                    <button class="board-add-card" id="add-card-board-${boardId}">Add Card</button>
                    <button class="board-add-status" id="add-status-board-${boardId}"
                    type="button">Add Status</button>
                    <button class="board-toggle" data-toggle="collapse" data-target="#columns-board-id-${boardId}">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="board-columns collapse show" id="columns-board-id-${boardId}"></div>
            </section>`
    },
    createColumnsStatusesForBoard: function (statusId, columnStatusTitle) {
        return `
            <div class="board-column status-${statusId}">
                <div class="board-column-title">${columnStatusTitle}</div>
                <div class="board-column-content"></div>
            </div>
    `
    },

    openAddDataModal: function (modalId, openingButtonId) {
        let modal = document.querySelector(modalId);
        openModalOnClick(modal, openingButtonId);
        closeModalOnClick(modal);
    },

    submitModalData: function (modalId) {
        const modal = document.querySelector(modalId);
        const submitModalDataButton = modal.getElementsByClassName("submit-modal-data")[0];
        const modalInputs = modal.querySelectorAll("input");
        submitModalDataButton.addEventListener("click", function () {
            const dataInputsDict = getDataFromModalInputs(modalInputs);
            const dataToPost = {...dataInputsDict}
            console.log(dataToPost)
            dataHandler.createNewBoard(dataToPost, function (new_board) {
                modal.className = "modal-hide";
                console.log(new_board[0]);
                appendHtmlWithBewBoard(new_board[0]);
                return new_board
            })
        })
    }
}

function getAllModalInputFields(modalId) {
    const modal = document.querySelector(modalId);
    const submitModalDataButton = modal.getElementsByClassName("submit-modal-data")[0];
    const modalInputs = modal.querySelectorAll("input");
    return modalInputs
}


function getDataFromModalInputs(modalInputs) {
    let dataInputsDict = {}
    for (let input of modalInputs) {
        dataInputsDict[input.name] = input.value
    }
    return dataInputsDict
}

function openModalOnClick(modal, openingButtonId) {
    let openingButton = document.querySelector(openingButtonId);
    openingButton.addEventListener("click", function () {
        modal.className = "modal-background";
    });
}

function closeModalOnClick(modal) {
    let closeModalIcon = modal.getElementsByClassName("close-modal")[0];
    closeModalIcon.addEventListener("click", function () {
        modal.className = "modal-hide"
    })
}


let appendHtmlWithBewBoard = function (newBoard) {
    let boardElementHTML = boardsHandler.createBoard(newBoard.title, newBoard.id);
    let boardsContainer = document.querySelector("#board-container");
    boardsContainer.insertAdjacentHTML("beforeend", boardElementHTML);
    for (let statusIndex = 0; statusIndex < newBoard["statuses_list"].length; statusIndex++) {
        let statusColumnElementHTML = boardsHandler.createColumnsStatusesForBoard(newBoard["ids"][statusIndex],
            newBoard["statuses_list"][statusIndex]);
        let columnsContainer = document.querySelector(`#columns-board-id-${newBoard.id}`)
        columnsContainer.insertAdjacentHTML("beforeend", statusColumnElementHTML);
    }
}