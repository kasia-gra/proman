// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";

export let dom = {
        init: function () {
            // This function should run once, when the page is loaded.
        },

        loadStatuses: function () {
            // retrieves boards and makes showBoards called
            dataHandler.getStatuses(function (statuses) {
                // dom.showBoards(statuses);
            });
        },


        loadBoards: function () {
            // retrieves boards and makes showBoards called
            const getAllStatusesDict = dataHandler.getStatuses(function (response) {
                    dataHandler.getBoards(function (boards) {
                        dom.showBoards(boards)
                        boards.map(function (board) {
                            for (let boardAssignedStatusId of board.statuses) {
                                response.map(function (statusDict) {
                                    if (boardAssignedStatusId == statusDict.id) {
                                        let statusColumnElementHTML = createColumnsStatusesForBoard(statusDict.id ,statusDict.title);
                                        let columnsContainer = document.querySelector(`#columns-board-id-${board.id}`)
                                        columnsContainer.insertAdjacentHTML("beforeend", statusColumnElementHTML);
                                    }
                                })
                            }
                        })
                    })
                }
            )
        },


        showBoards: function (boards) {
            // shows boards appending them to #boards div
            // it adds necessary event listeners also

            boards.map(function (board) {
                dom.loadCards(board.id);
                let boardElementHTML = createBoard(board.title, board.id);
                let boardsContainer = document.querySelector("#board-container");
                boardsContainer.insertAdjacentHTML("beforeend", boardElementHTML);
            })

            addListenerToAddCardBtn();

            // let boardList = '';
            //
            // for(let board of boards){
            //     boardList += `
            //         <li>${board.title}</li>
            //     `;
            // }
            //
            // const outerHtml = `
            //     <ul class="board-container">
            //         ${boardList}
            //     </ul>
            // `;
            // let boardsContainer = document.querySelector('#boards');
            // boardsContainer.insertAdjacentHTML("beforeend", outerHtml);
        }
        ,
        loadCards: function (boardId) {
            // retrieves cards and makes showCards called

            const allCardsDict = dataHandler.getCardsByBoardId(boardId, function (cards) {
                dom.showCards(cards)
            });

        }
        ,
        showCards: function (cards) {
            // shows the cards of a board
            // it adds necessary event listeners also

            cards.map(function (card){
                let cardElementHTML = createCard(card.title);
                let statusContainer = document.querySelector(`#columns-board-id-${card.board_id} .board-column`);
                statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
            })
        },
// here comes more features
    }
;


let createBoard = function (boardTitle, boardId) {
    return `
            <section class="board" id="board-id-${boardId}">
                <div class="board-header" id="header-board-${boardId}">
                    <span class="board-title">${boardTitle}</span>
                    <button class="board-add-card" id="add-card-board-${boardId}">Add Card</button>
                    <button class="board-add-status" id="add-status-board-${boardId}"">Add Status</button>
                    <button class="board-toggle"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="board-columns" id="columns-board-id-${boardId}">column</div>
            </section>`
}

let createColumnsStatusesForBoard = function (statusId, columnStatusTitle) {
    return `
            <div class="board-column status-${statusId}">
                <div class="board-column-title">${columnStatusTitle}</div>
                <div class="board-column-content">
                    <div class="card">Card</div>
                </div>
            </div>
    `
}

let addListenerToAddCardBtn = function() {

    let addButtons = document.querySelectorAll(".board-add-card");
    for (let button of addButtons) {
        button.addEventListener("click", addCard);
    }
}

function addCard(button) {
    let boardId = (button.target.id).slice(-1); // return number of board where btn is clicked
    let statusId = 0; // by default
    let cardTitle = "Empty card"; // temporary
    let cardElementHTML = createCard(cardTitle);

    let statusContainer = document.querySelector(`#board-id-${boardId} .board-column-content`);
    statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
    dataHandler.createNewCard(cardTitle, boardId, statusId)
}

function createCard(title) {
    if (!title) {title = "Empty card"}
    return `
            <div class="card">${title}</div>
    `
}

