// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";
import {modalsHandlers} from "./modals_handler.js"
import {changeBoardName} from "./change_board_name.js"
import {cardsHandler} from "./cards_handler.js"

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
                        addEventListenersToCards();
                        addListenersToDeleteCards();
                        addListenerToRegister();
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
                let cardElementHTML = cardsHandler.createCard(card.title, card.id);
                let statusContainer, status;
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
                    <button class="board-toggle" data-toggle="collapse" data-target="#columns-board-id-${boardId}">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="board-columns collapse show" id="columns-board-id-${boardId}"></div>
            </section>`
}

let createColumnsStatusesForBoard = function (statusId, columnStatusTitle) {
    return `
            <div class="board-column status-${statusId}">
                <div class="board-column-title">${columnStatusTitle}</div>
                <div class="board-column-content"></div>
            </div>
    `
}

function addNewStatusListeners() {
    const modal = document.querySelector('#modal-create-status'); // Popup
    const saveButton = document.querySelector('#save-status'); //"Save Status" button
    //Add "Add Status" button listener
    const addHandler = function (e) {
        if (e.target.classList.contains('board-add-status')) {
            $('#modal-create-status').modal()
            const board = e.target.parentNode.parentNode
            const boardId = board.id[board.id.length - 1];
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
                const newStatus = { title: newStatusTitle, board: boardId };
                dataHandler.createNewStatus(newStatus, data => data ?
                    resolve(data) : reject(new Error('Cannot save the new status. Try again?')));
            })).then(newStatus => {
                    const columnsContainer = document.querySelector(`#columns-board-id-${boardId}`);
                    const newStatusColumn = createColumnsStatusesForBoard(newStatus.id, newStatus.title);
                    columnsContainer.insertAdjacentHTML("beforeend", newStatusColumn);
                }, error => alert(error));
        } else alert('Use letters and numbers only. No big whitespace.')
    }
    saveButton.addEventListener('click', saveHandler);
}

let addListenerToAddCardBtn = function() {
    let addButtons = document.querySelectorAll(".board-add-card");
    for (let button of addButtons) {
        button.addEventListener("click", cardsHandler.addCard);
    }
}


function addEventListenersToCards() {
    document.addEventListener('click', cardsHandler.editCardTitle);
}

function addListenersToDeleteCards() {
    document.addEventListener('click', cardsHandler.deleteCard)

}

function addListenerToRegister() {
    let registerBtn = document.querySelector('#register')
    registerBtn.addEventListener('click', registerModal)
}

function registerModal(e) {
    const saveButton = document.querySelector('#save-user');
    saveButton.addEventListener('click', function (e) {
        e.preventDefault()
        let nameInput = document.querySelector('#user-name');
        let emailInput = document.querySelector('#user-email');
        let passwordInput = document.querySelector('#user-password');
        if(validateInput(nameInput) && validateInputEmail(emailInput) && validateInput(passwordInput)) {
            $('#modalRegisterForm').modal('toggle');
            console.log('Valid inputs');
        }
        else {
            emailInput.value = '';
            passwordInput.value = '';
            alert('Wrong input! Use letters and numbers only. Minimum 3 characters')}
    });

}

function validateInputEmail(inputEmail) {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return !emailReg.test(inputEmail.value);
}

function validateInput(inputName) {
      return inputName.value.length >= 3;
}