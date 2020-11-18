import {dataHandler} from "./data_handler.js";


export let changeBoardName = {
    addEventListenersToBoardTitles: function () {
        const boardsContainer = document.querySelector(".board-container");
        boardsContainer.addEventListener('change', updateValue);
    }
}

const updateValue = function (e) {
    const dataToPost = {};
    if (e.target.className == "board-title-input") {
        dataToPost["title"] = e.target.value;
        dataToPost["id"] = e.target.parentNode.parentNode.id.replace("header-board-", "");
        dataHandler.editBoard(dataToPost, function (edited_board_data) {
            console.log(edited_board_data)
        })
    }
}