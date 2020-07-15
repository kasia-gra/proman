import {dataHandler} from "./data_handler.js";


const defaultBoardStatuses = "0,1,2,3"

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
            let dataToPost = {...dataInputsDict, ...additionalData }
            dataHandler.createNewBoard(dataToPost, function () {
                console.log("test")
            })
        })
    }
}

function getAllModalInputFields(modalId){
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
        modal.className = "modal-show";
    });
}

function closeModalOnClick(modal) {
    let closeModalIcon = modal.getElementsByClassName("close-modal")[0];
    closeModalIcon.addEventListener("click", function () {
        modal.className = "modal-hide"
    })
}


function generateAdditionalDataForNewBoard() {
    let allBoards  = document.getElementsByClassName("board");
    let latestBoardId = allBoards[allBoards.length -1]
    let newBoardId = parseInt(latestBoardId.dataset.boardId) + 1;
    console.log(latestBoardId.dataset.boardId)
    console.log(parseInt(latestBoardId.dataset.boardId))
    return {id: newBoardId, statuses: defaultBoardStatuses}
}
