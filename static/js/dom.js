// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";
import {boardsHandler} from "./boards_handler.js"
import {changeBoardName} from "./change_board_name.js"
import {cardsHandler} from "./cards_handler.js"
import {eventManager} from "./event_manager.js"

export let dom = {
    init: function () {
        // This function should run once, when the page is loaded.
    },


    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(function (boards) {
                dom.showBoards(boards)
                addNewStatusListeners();
                eventManager.addListener.renameStatus();
                addEventListenersToCards();
                addListenersToDeleteCards();
                addListenerToRegister();
                addListenerToLogin();
            }
        )
    }
    ,

    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also

        boards.map(function (board) {
            let boardElementHTML = boardsHandler.createBoard(board.title, board.id);
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
            let statusColumnElementHTML = boardsHandler.createColumnsStatusesForBoard(board["ids"][statusIndex],
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
            let cardElementHTML = cardsHandler.createCard(card.title, card.id);
            let statusContainer;
            statusContainer = document.querySelector(`#columns-board-id-${card.board_id} .status-${card.status_id} .board-column-content`);
            statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
        })
    }
    ,
    addNewBoard: function () {
        boardsHandler.openAddDataModal("#modal-create-board", "#add-board-button");
        const res = boardsHandler.submitModalData("#modal-create-board")
        changeBoardName.addEventListenersToBoardTitles();
        // let modal = document.getElementById("add-board-button");
        // modal.addEventListener("click", function () {dataHandler.createNewBoard(data, function () {
        //     console.log(data)
        // })})
    },

    editBoardTitle: function () {
        changeBoardName.addEventListenersToBoardTitles();
    }
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
                const newStatusColumn = boardsHandler.createColumnsStatusesForBoard(newStatus.id, newStatus.title);
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


function addListenerToLogin() {
    const saveButton = document.querySelector('#login-user');
    saveButton.addEventListener('click', getUserLoginDataFromModal)
}

function getUserLoginDataFromModal(e) {
    e.preventDefault()
    const loginData ={};
    let emailInput = document.querySelector('#log-user-email');
    let passwordInput = document.querySelector('#log-user-password');
    if (validateInputEmail(emailInput) && validateInput(passwordInput)) {
        loginData['email'] = emailInput.value;
        loginData['password'] = passwordInput.value;
        dataHandler.loginUser(loginData, function(message) {
             if (message.includes('Logged')) { $('#modalRegisterForm').modal('toggle') }
            alert(message)
        });
    }
    else { alert('Wrong input! Use letters and numbers only. Minimum 3 characters') }
    emailInput.value = '';
    passwordInput.value = '';
}

function addListenerToRegister() {
    const saveButton = document.querySelector('#save-user');
    saveButton.addEventListener('click', getUserRegistrationDataFromModal);

}

function getUserRegistrationDataFromModal(e) {
     e.preventDefault()
    const newUserData = {}
    let nameInput = document.querySelector('#user-name');
    let emailInput = document.querySelector('#user-email');
    let passwordInput = document.querySelector('#user-password');

    if (validateInput(nameInput) && validateInputEmail(emailInput) && validateInput(passwordInput)) {
        newUserData['name'] = nameInput.value;
        newUserData['email'] = emailInput.value;
        newUserData['password'] = passwordInput.value;
        dataHandler.createNewUser(newUserData, function(message){
            nameInput.value = '';
            if (message.includes('registered')) { $('#modalRegisterForm').modal('toggle') }
            alert(message)
        })
    }
    else { alert('Wrong input! Use letters and numbers only. Minimum 3 characters') }
    emailInput.value = '';
    passwordInput.value = '';
}


function validateInputEmail(inputEmail) {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(inputEmail.value);
}

function validateInput(inputName) {
    return inputName.value.length >= 3;
}