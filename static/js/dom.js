// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";
import {modalsHandlers} from "./modals_handler.js"
import {changeBoardName} from "./change_board_name.js"

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
            dataHandler.getStatuses(function (statuses) {
                    dataHandler.getBoards(function (boards) {
                        dom.showBoards(boards)
                        addNewStatusListeners();
                        boards.map(function (board) {
                            for (let boardAssignedStatusId of board.statuses) {
                                statuses.map(function (statusDict) {
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

        }
        ,
        loadCards: function (boardId) {
            // retrieves cards and makes showCards called

            dataHandler.getCardsByBoardId(boardId, function (cards) {
                dom.showCards(cards)
            });

        }
        ,
        showCards: function (cards) {
            // shows the cards of a board
            // it adds necessary event listeners also

            cards.map(function (card){
                let cardElementHTML = createCard(card.title);
                let statusContainer, status;
                console.log(typeof(card.status_id))
                switch (card.status_id) {
                    case 0 : status = 0;
                        break;
                    case 1 : status = 1;
                        break;
                    case 2 : status = 2;
                        break;
                    case 3 : status = 3;
                        break;
                }
                statusContainer = document.querySelector(`#columns-board-id-${card.board_id} .status-${status} .board-column-content`);
                statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
            })
        }
        ,
        addNewBoard: function () {
            modalsHandlers.openAddDataModal("#modal-create-board", "#add-board-button");
            modalsHandlers.submitModalData("#modal-create-board")
            changeBoardName.addEventListenersToBoardTitles ();
            // let modal = document.getElementById("add-board-button");
            // modal.addEventListener("click", function () {dataHandler.createNewBoard(data, function () {
            //     console.log(data)
            // })})
        },

        editBoardTitle: function () {
            changeBoardName.addEventListenersToBoardTitles ();
        }
// here comes more features
    };


let createBoard = function (boardTitle, boardId) {
    return `
            <section class="board" id="board-id-${boardId}" data-board-id='${boardId}'>
                <div class="board-header" id="header-board-${boardId}">
                    <span class="board-title"><textarea class="board-title-input">${boardTitle}</textarea></span>
                    <button class="board-add-card" id="add-card-board-${boardId}">Add Card</button>
                    <button class="board-add-status" id="add-status-board-${boardId}"
                    type="button">Add Status</button>
                    <button class="board-toggle"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="board-columns" id="columns-board-id-${boardId}"></div>
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

function addNewStatusListeners() {
    const addButtons = document.querySelectorAll("button[id^='add-status-board']"); //"Add Status" buttons
    const modal = document.querySelector('#modal-create-status'); // Popup
    const saveButton = document.querySelector('#save-status'); //"Save Status" button
    //Add "Add Status" button listener
    const addHandler = function (e) {
        $('#modal-create-status').modal()
        const boardId = this.id[this.id.length - 1];
        modal.setAttribute('board', boardId)
    }
    addButtons.forEach(button => button.addEventListener('click', addHandler));
    //Add "Save Changes" button on new status popup listener
    const saveHandler = function (e) {
        const input = document.querySelector('#new-status-title');
        if (input.value.replace(' ', '').toLowerCase().match(/^[0-9a-z]+$/)) {
            const boardId = modal.getAttribute('board');
            const newStatusTitle = input.value;
            input.value = '';
            $('#modal-create-status').modal('toggle');
            //Send request to save the new status and add it to DOM
            let getStatuses = new Promise((resolve) => {
                dataHandler.getStatuses(statuses => resolve(statuses));
            })
            getStatuses.then(result => {
                const statuses = result;
                const newStatus = {id: Number(statuses[statuses.length - 1].id) + 1, title: newStatusTitle};
                const columnsContainer = document.querySelector(`#columns-board-id-${boardId}`);
                dataHandler.createNewStatus(newStatus, (data) => null);
                const newStatusColumn = createColumnsStatusesForBoard(newStatus.id, newStatus.title);
                columnsContainer.insertAdjacentHTML("beforeend", newStatusColumn)
            });
        } else alert('Wrong status name format. Use letters and numbers only.')
    }
    saveButton.addEventListener('click', saveHandler);
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
    dataHandler.createNewCard(cardTitle, boardId, statusId, function (new_board) {
        console.log(new_board)
    });
    let statusContainer = document.querySelector(`#board-id-${boardId} .board-column-content`);
    statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
}

function createCard(title) {
    if (!title) {title = "Empty card"}
    return `
            <div class="card">${title}</div>
    `
}

