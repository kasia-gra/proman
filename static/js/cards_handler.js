import {dataHandler} from "./data_handler.js";
import {dragCardsHandler} from "./drag_cards_handler.js";
import {htmlCreator} from "./html_creator.js";

export let cardsHandler = {

    addCard: function (button) {
        let boardId = button.target.id.match(/\d+/)[0]; // return number of board where btn is clicked
        let statusId;
        document.querySelector(`#columns-board-id-${boardId} .board-column`).classList.forEach(
            c => statusId = c.match(/^status-(\d+)$/)
        ); // by default
        statusId = statusId[1];
        let cardTitle = "Empty card"; // temporary
        dataHandler.createNewCard(cardTitle, boardId, statusId, function (newCard) {
            let cardElementHTML = htmlCreator.createCard(newCard);
            let statusContainer = document.querySelector(`#board-id-${boardId} .board-column-content`);
            statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
            dragCardsHandler.InitCardsDragDropListeners();
        });
    },

    editCard: function (e) {
        let cardId = (e.target.parentNode.id);
        if (e.target && e.target.className === 'card-title') {
            if (!document.querySelector('#card-input')) {
                let input = document.createElement('input');    //create input
                input.setAttribute('id', 'card-input');
                input.setAttribute('value', e.target.innerHTML);
                input.type = 'text';
                let oldTitle = e.target.innerHTML;
                e.target.innerHTML = '';
                e.target.appendChild(input);
                input.focus();
                input.select();
                input.closest('.card').setAttribute('draggable', 'false');

                input.addEventListener('keyup', function (event) {    //add listener on input
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        let title = document.getElementById('card-input').value;   //get value from input
                        if (title.replace(/\s\s+/g, ' ').toLowerCase().match(/^[0-9a-z ]+$/)) {
                            dataHandler.editCard(title, cardId, function (editedCard) {
                            }); // ask mentor about callback
                            input.closest('.card').setAttribute('draggable', 'true');
                            e.target.innerHTML = title;
                        } else alert('Use letters and numbers only.')
                    } else if (event.key === 'Escape') {
                        input.closest('.card').setAttribute('draggable', 'true');
                        e.target.innerHTML = oldTitle
                    }
                })
            }
        }
    },


    deleteCard: function (e) {
        if (e.target && e.target.classList.contains('delete-card')) {
            let cardId = e.target.parentNode.parentNode.id;
            dataHandler.deleteCardById({cardId: cardId}, function (data) {
                e.target.parentNode.parentNode.remove()
            });
        }
    },

    addListenerToAddCardBtn: function () {
        let addButtons = document.querySelectorAll(".board-add-card");
        for (let button of addButtons) {
            button.addEventListener("click", cardsHandler.addCard);
        }
    },

    addEventListenersToCards: function () {
        document.addEventListener('click', cardsHandler.editCard);
    },

    addListenersToDeleteCards: function () {
        document.addEventListener('click', cardsHandler.deleteCard)
    }
}
