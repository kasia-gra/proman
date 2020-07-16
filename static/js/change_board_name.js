import {dataHandler} from "./data_handler.js";


export let changeBoardName = {
    addEventListenersToBoardTitles: function () {
        document.addEventListener('click', function (e) {
            if (e.target && e.target.className == 'board-title-input') {
                let isDataPosted = localStorage.setItem("posted", "false");
                let currentElement = e.target;
                currentElement.id = "board-title-to-post"
                // let editedBoardId = e.target.parentNode.parentNode.id;
                // let newBoardTitle = e.target.value;
                postData(currentElement)
            }
        })
    }
}


function postData(currentElement) {
    window.onclick = function (event) {
        let isDataPosted = localStorage.getItem("posted")
        if (event.target != currentElement && isDataPosted == "false") {
            let isDataPosted = localStorage.setItem("posted", "true");
            let textWithData = document.getElementById("board-title-to-post");
            let newTitle = textWithData.value;
            let boardId = textWithData.parentNode.parentNode.id.replace("header-board-", "");
            let dataToPost = {};
            dataToPost["id"] = parseInt(boardId);
            dataToPost["title"] = newTitle;
            textWithData.removeAttribute('id');
            dataHandler.editBoard(dataToPost, function (edited_board_data) {
                console.log(edited_board_data)
            })
        }
    }
}
