// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";
import {boardsHandler} from "./boards_handler.js"
import {changeBoardName} from "./change_board_name.js"
import {cardsHandler} from "./cards_handler.js"
import {statusesHandler} from "./status_handler.js"
import {dragCardsHandler} from "./drag_cards_handler.js"
import {usersHandler} from "./users_handler.js"
import {htmlCreator} from "./html_creator.js"


export let dom = {
    init: function () {
        dom.addNewBoard();
        dom.loadBoards();
        // This function should run once, when the page is loaded.
    },

    loadBoards: function () {
        // retrieves boards and makes showBoards called
        let userId = localStorage.getItem("user_id");
        dataHandler.getBoards(function (boards) {
                dom.showBoards(boards)
            }
        )
    },

    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also

        boards.map(function (board) {
            let boardElementHTML = htmlCreator.createBoard(board.title, board.id);
            let boardsContainer = document.querySelector("#board-container");
            boardsContainer.insertAdjacentHTML("beforeend", boardElementHTML);
            dom.showStatuses(board);
        })
        dom.loadCards();
        statusesHandler.addListener.addNewStatus();
        statusesHandler.addListener.renameStatus();
        statusesHandler.addListener.deleteStatus();
        cardsHandler.addEventListenersToCards();
        cardsHandler.addListenersToDeleteCards();
        cardsHandler.addListenerToAddCardBtn();
        usersHandler.addListenerToRegister();
        usersHandler.addListenerToLogin();
        usersHandler.addListenerToLogoutBtn();
        boardsHandler.addListenerToDeleteBoardBtn();
        dom.addRefreshListener();
    },

    showStatuses: function (board) {

        for (let statusIndex = 0; statusIndex < board["statuses_list"].length; statusIndex++) {
            let statusColumnElementHTML = htmlCreator.createColumnsStatusesForBoard(board["ids"][statusIndex],
                board["statuses_list"][statusIndex]);
            let columnsContainer = document.querySelector(`#columns-board-id-${board.id}`)
            columnsContainer.insertAdjacentHTML("beforeend", statusColumnElementHTML);
        }
    },

    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getPublicCards(function (cards) {
            dom.showCards(cards)
        })
    },

    showCards: function (cards) {

        cards.map(function (card) {
            let cardElementHTML = htmlCreator.createCard(card);
            let statusContainer;
            statusContainer = document.querySelector(`#columns-board-id-${card.board_id} .status-${card.status_id} .board-column-content`);
            statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
        })
        dragCardsHandler.InitCardsDragDropListeners();
    },

    addNewBoard: function () {
        boardsHandler.openAddDataModal("#modal-create-board", "#add-board-button");
        boardsHandler.submitModalData("#modal-create-board")
        // boardsHandler.openAddDataModal("#modal-create-private-board", "#add-private-board-button");
        // boardsHandler.submitModalData("#modal-create-private-board")
        changeBoardName.addEventListenersToBoardTitles();
    },

    addRefreshListener: function () {
        const syncButton = document.querySelector('#manual_sync');
        syncButton ? syncButton.addEventListener('click', () => location.reload()) : null;
    }
// here comes more features
};

