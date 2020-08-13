import {dataHandler} from "./data_handler.js";
import {cardsHandler} from "./cards_handler.js"
import {htmlCreator} from "./html_creator.js"

export let boardsHandler = {

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
            const dataToPost = getDataFromModalInputs(modalInputs);
            dataHandler.createNewBoard(dataToPost, function (new_board) {
                modal.className = "modal-hide";
                appendHtmlWithBewBoard(new_board);
                cardsHandler.addListenerToAddCardBtn();
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
    let boardElementHTML = htmlCreator.createBoard(newBoard.title, newBoard.id);
    let boardsContainer = document.querySelector("#board-container");
    boardsContainer.insertAdjacentHTML("beforeend", boardElementHTML);
    for (let statusIndex = 0; statusIndex < newBoard["statuses_list"].length; statusIndex++) {
        let statusColumnElementHTML = htmlCreator.createColumnsStatusesForBoard(newBoard["ids"][statusIndex],
            newBoard["statuses_list"][statusIndex]);
        let columnsContainer = document.querySelector(`#columns-board-id-${newBoard.id}`)
        columnsContainer.insertAdjacentHTML("beforeend", statusColumnElementHTML);
    }
}