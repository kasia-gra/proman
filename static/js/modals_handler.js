import {dataHandler} from "./data_handler.js";


const defaultBoardStatuses = "0,1,2,3"
const defaultBoardStatusesDict = [{"id": "0", "title": "new"},
    {"id": "1", "title": "in progress"},
    {"id": "2", "title": "testing"},
    {"id": "3", "title": "done"}]

export let modalsHandlers = {

    openAddDataModal: function (modalId, openingButtonId) {
        let modal = document.querySelector(modalId);
        openModalOnClick(modal, openingButtonId);
        closeModalOnClick(modal);
    },

    submitModalData: function (modalId) {
        let modal = document.querySelector(modalId);
        let submitModalDataButton = modal.getElementsByClassName("submit-modal-data")[0];
        let modalInputs = modal.querySelectorAll("input");
        submitModalDataButton.addEventListener("click", function () {
            let dataInputsDict = getDataFromModalInputs(modalInputs);
            let additionalData = generateAdditionalDataForNewBoard();
            let dataToPost = {...dataInputsDict, ...additionalData}
            dataHandler.createNewBoard(dataToPost, function (new_board) {
                // console.log(new_board.statuses.split(","));
                appendHtmlWithBewBoard(new_board);
                addNewBoardStatusesToHtml(new_board, defaultBoardStatusesDict)
            })
        })
    }
}

function getAllModalInputFields(modalId) {
    let modal = document.querySelector(modalId);
    let submitModalDataButton = modal.getElementsByClassName("submit-modal-data")[0];
    let modalInputs = modal.querySelectorAll("input");
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


function generateAdditionalDataForNewBoard() {
    let allBoards = document.getElementsByClassName("board");
    let latestBoardId = allBoards[allBoards.length - 1]
    let newBoardId = parseInt(latestBoardId.dataset.boardId) + 1;
    // console.log(latestBoardId.dataset.boardId)
    // console.log(parseInt(latestBoardId.dataset.boardId))
    return {id: newBoardId, statuses: defaultBoardStatuses}
}


let createNewBoardHtml = function (boardTitle, boardId) {
    return `
            <section class="board" id="board-id-${boardId}" data-board-id='${boardId}'>
                <div class="board-header" id="header-board-${boardId}">
                    <span class="board-title">${boardTitle}</span>
                    <button class="board-add" id="add-card-board-${boardId}">Add Card</button>
                    <button class="board-add-status" id="add-status-board-${boardId}"
                    type="button" data-toggle="modal" data-target="#modal-create-status">Add Status</button>
                    <button class="board-toggle"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="board-columns" id="columns-board-id-${boardId}"></div>
            </section>`
}

let createColumnsStatusesForNewBoard = function (columnStatusTitle) {
    return `
            <div class="board-column">
                <div class="board-column-title">${columnStatusTitle}</div>
                <div class="board-column-content">
                    <div class="card">Card</div>
                </div>
            </div>
    `
}

let appendHtmlWithBewBoard = function (newBoard) {
    let boardElementHTML = createNewBoardHtml(newBoard.title, newBoard.id);
    let boardsContainer = document.querySelector("#board-container");
    boardsContainer.insertAdjacentHTML("beforeend", boardElementHTML);
}


let addNewBoardStatusesToHtml = function (newBoard, defaultBoardStatusesDict) {
    for (let defaultStatusId of newBoard.statuses.split(",")) {
        let columnTitle = defaultBoardStatusesDict[defaultStatusId]
        let statusColumnElementHTML = createColumnsStatusesForNewBoard(columnTitle.title);
        let columnsContainer = document.querySelector(`#columns-board-id-${newBoard.id}`)
        columnsContainer.insertAdjacentHTML("beforeend", statusColumnElementHTML);
    }
}
