import {dataHandler} from "./data_handler.js";


const defaultBoardStatuses = "0,1,2,3"
const defaultStatuses = {"0": "new", "1": "in progress", "2": "testing", "3": "done"}



export let modalsHandlers = {

    openAddDataModal: function (modalId, openingButtonId) {
        const modal = document.querySelector(modalId);
        openModalOnClick(modal, openingButtonId);
        closeModalOnClick(modal);
    },

    submitModalData: function (modalId) {
        const modal = document.querySelector(modalId);
        const submitModalDataButton = modal.getElementsByClassName("submit-modal-data")[0];
        const modalInputs = modal.querySelectorAll("input");
        submitModalDataButton.addEventListener("click", function () {
            const dataInputsDict = getDataFromModalInputs(modalInputs);
            const additionalData = generateAdditionalDataForNewBoard();
            const dataToPost = {...dataInputsDict, ...additionalData}
            dataHandler.createNewBoard(dataInputsDict, function (new_board) {
                modal.className = "modal-hide";
                appendHtmlWithBewBoard(new_board);
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
    return {statuses: defaultBoardStatuses}
}


const createNewBoardHtml = function (boardTitle, boardId) {
    return `
            <section class="board" id="board-id-${boardId}" data-board-id='${boardId}'>
                <div class="board-header" id="header-board-${boardId}">
                    <span class="board-title">${boardTitle}</span>
                    <button class="board-add" id="add-card-board-${boardId}">Add Card</button>
                    <button class="board-add-status" id="add-status-board-${boardId}"
                    type="button" data-toggle="modal" data-target="#modal-create-status">Add Status</button>
                    <button class="board-toggle"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="board-columns" id="columns-board-id-${boardId}">
                ${assignColumnsStatusesForNewBoard(defaultStatuses)}</div></section>`
}



let assignColumnsStatusesForNewBoard = function (defaultStatuses) {
        let sectionColumns = ""
        let id = 0
    Object.keys(defaultStatuses).map(function(statusID, statusTitle){
        sectionColumns = sectionColumns +
     `<div class="board-column status ${statusID}">
         <div class="board-column-title">${statusTitle}</div>
         <div class="board-column-content">
             <div class="card">Card</div>
         </div>
     </div>`
    });
    return sectionColumns
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
