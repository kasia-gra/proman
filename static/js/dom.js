// It uses data_handler.js to visualize elements
import {dataHandler} from "./data_handler.js";
import {modalsHandlers} from "./modals_handler.js"

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
                                        let statusColumnElementHTML = createColumnsStatusesForBoard(statusDict.title);
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
                let boardElementHTML = createBoard(board.title, board.id);
                let boardsContainer = document.querySelector("#board-container");
                boardsContainer.insertAdjacentHTML("beforeend", boardElementHTML);
            })

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
        }
        ,
        showCards: function (cards) {
            // shows the cards of a board
            // it adds necessary event listeners also
        }
        ,
        addNewBoard: function () {
            modalsHandlers.openAddDataModal("#modal-create-board", "#add-board-button");
            modalsHandlers.submitModalData("#modal-create-board")
            // let modal = document.getElementById("add-board-button");
            // modal.addEventListener("click", function () {dataHandler.createNewBoard(data, function () {
            //     console.log(data)
            // })})
        }
// here comes more features
    }
;


let createBoard = function (boardTitle, boardId) {
    return `
            <section class="board" id="board-id-${boardId}" data-board-id='${boardId}'>
                <div class="board-header" id="header-board-${boardId}">
                    <span class="board-title">${boardTitle}</span>
                    <button class="board-add" id="add-card-board-${boardId}">Add Card</button>
                    <button class="board-add-status" id="add-status-board-${boardId}"
                    type="button" data-toggle="modal" data-target="#modal-create-status">Add Status</button>
                    <button class="board-toggle"><i class="fas fa-chevron-down"></i></button>
                </div>
                <div class="board-columns" id="columns-board-id-${boardId}"></div>
            </section>`
}

let createColumnsStatusesForBoard = function (columnStatusTitle) {
    return `
            <div class="board-column">
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
        const boardID = this.id[this.id.length - 1];
        modal.setAttribute('board', boardID)
    }
    addButtons.forEach(button => button.addEventListener('click', addHandler));
    //Add "Save Changes" button on new status popup listener
    const saveHandler = function (e) {
        const boardID = modal.getAttribute('board');
        const input = document.querySelector('#new-status-title')
        const newStatus = input.value;
        input.value = '';
        console.log(boardID, newStatus)
    }
    saveButton.addEventListener('click', saveHandler);
}