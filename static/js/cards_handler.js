import {dataHandler} from "./data_handler.js";


export let cardsHandler = {

    addCard : function (button) {
        let boardId = button.target.id.match(/\d+/)[0]; // return number of board where btn is clicked
        let statusId = 1; // by default
        let cardTitle = "Empty card"; // temporary
        dataHandler.createNewCard(cardTitle, boardId, statusId, function (newCard) {
            let cardElementHTML = cardsHandler.createCard(cardTitle, newCard.id);
            let statusContainer = document.querySelector(`#board-id-${boardId} .board-column-content`);
        statusContainer.insertAdjacentHTML("beforeend", cardElementHTML);
        });
    },

    editCard : function (e) {
        let cardId = (e.target.parentNode.id);
        if(e.target && e.target.className === 'card-title') {
            if (!document.querySelector('#card-input')) {
                let input = document.createElement('input');    //create input
                input.setAttribute('id', 'card-input');
                input.setAttribute('value', e.target.innerHTML);
                input.type = 'text';
                let oldTitle = e.target.innerHTML;
                e.target.innerHTML = '';
                e.target.appendChild(input);

                input.addEventListener('keyup', function (event) {    //add listener on input
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        let title = document.getElementById('card-input').value;   //get value from input
                        if (title.replace(/\s\s+/g, ' ').toLowerCase().match(/^[0-9a-z ]+$/)) {
                            dataHandler.editCard(title, cardId, function (editedCard) {
                            }); // ask mentor about callback
                            e.target.innerHTML = title;
                        }
                        else alert('Use letters and numbers only.')
                    }
                    else if (event.key === 'Escape') { e.target.innerHTML = oldTitle }
                })
            }
        }
    },

    createCard : function (title, id) {
        if (!title) {title = "Empty card"}
        return `
            <div class="card" draggable="true" id="${id}">
                <div class="card-remove"><i class="fas fa-trash-alt delete-card"></i></div>
                <div class="card-title">${title}</div>
            </div>
        `
    },

     deleteCard : function(e) {
         if (e.target && e.target.classList.contains('delete-card')) {
             let cardId = e.target.parentNode.parentNode.id;
             dataHandler.deleteCardById(cardId, function (data) {
              e.target.parentNode.parentNode.remove()
             });
         }
     }
}
