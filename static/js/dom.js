// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";
import {boardsHandler} from "./boards_handler.js"
import {changeBoardName} from "./change_board_name.js"
import {cardsHandler} from "./cards_handler.js"
import {eventManager} from "./event_manager.js"
import {dragCardsHandler} from "./drag_cards_handler.js"
import {usersHandler} from "./users_handler.js"
import {htmlTemplates} from "./html_templates.js";

export let dom = {
    init: function () {
        dom.loadBoards();
        dom.addNewBoard();
        // This function should run once, when the page is loaded.
    },


    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(function (boards) {
                dom.showBoards(boards)
                addNewStatusListeners();
                eventManager.addListener.renameStatus();
                eventManager.addListener.deleteStatus();
                addEventListenersToCards();
                addListenersToDeleteCards();
                usersHandler.addListenerToRegister();
                usersHandler.addListenerToLogin();
                usersHandler.addListenerToLogoutBtn();
                changeBoardName.addEventListenersToBoardTitles();
            }
        )
    }
    ,

    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also

        boards.map(function (board) {
            let boardElementHTML = htmlTemplates.createBoard(board.title, board.id);
            let boardsContainer = document.querySelector("#board-container");
            boardsContainer.insertAdjacentHTML("beforeend", boardElementHTML);
            dom.showStatuses(board);
        })
        dom.loadCards();
        addListenerToAddCardBtn();
    }
    ,

    showStatuses: function (board) {;
        for (let statusIndex=0; statusIndex < board["statuses_list"].length; statusIndex++) {
            let statusColumnElementHTML = htmlTemplates.createColumnsStatusesForBoard(board["ids"][statusIndex],
                board["statuses_list"][statusIndex]);
            let columnsContainer = document.querySelector(`#columns-board-id-${board.id}`)
            columnsContainer.insertAdjacentHTML("beforeend", statusColumnElementHTML);
        }
    }
    ,

    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getAllCards(function(cards){
            dom.showCards(cards)
        })
    }
    ,

    showCards: function (cards) {
        cards.map(function (card) {
            let cardElementHTML = cardsHandler.createCard(card);
            let statusContainer;
            statusContainer = document.querySelector(`#columns-board-id-${card.board_id} .status-${card.status_id} .board-column-content`);
            statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
        })
        dragCardsHandler.InitCardsDragDropListeners();
    }
    ,
    addNewBoard: function () {
        boardsHandler.openAddDataModal("#modal-create-board", "#add-board-button");
        boardsHandler.submitModalData("#modal-create-board")
        changeBoardName.addEventListenersToBoardTitles();
    },

// here comes more features
};


function addNewStatusListeners() {
    const modal = document.querySelector('#modal-create-status'); // Popup
    const saveButton = document.querySelector('#save-status'); //"Save Status" button
    //Add "Add Status" button listener
    const addHandler = function (e) {
        if (e.target.classList.contains('board-add-status')) {
            $('#modal-create-status').modal()
            const board = e.target.parentNode.parentNode
            const boardId = board.id.match(/\d+/)[0];
            modal.setAttribute('board', boardId)
        }
    }
    document.addEventListener('click', addHandler)
    //Add "Save Changes" button on new status popup listener
    const saveHandler = function () {
        const input = document.querySelector('#new-status-title');
        if (input.value.replace(/ /g, '').toLowerCase().match(/^[0-9a-z]+$/)) {
            const boardId = modal.getAttribute('board');
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
                const newStatusColumn = htmlTemplates.createColumnsStatusesForBoard(newStatus.id, newStatus.title);
                columnsContainer.insertAdjacentHTML("beforeend", newStatusColumn);
            }, error => alert(error));
        } else alert('Use letters and numbers only. No big whitespace.')
    }
    saveButton.addEventListener('click', saveHandler);
}

let addListenerToAddCardBtn = function () {
    let addButtons = document.querySelectorAll(".board-add-card");
    for (let button of addButtons) {
        button.addEventListener("click", cardsHandler.addCard);
    }
}


function addEventListenersToCards() {
    document.addEventListener('click', cardsHandler.editCard);
}

function addListenersToDeleteCards() {
    document.addEventListener('click', cardsHandler.deleteCard)
}
