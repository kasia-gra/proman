// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this._data' below)
export let dataHandler = {
        _data: {}, // it is a "cache for all data received: boards, cards and statuses. It is not accessed from outside.
        _api_get: function (url, callback) {
            // it is not called from outside
            // loads data from API, parses it and calls the callback with it

            fetch(url, {
                method: 'GET',
                credentials: 'same-origin'
            })
                .then(response => response.json(), error => alert(error))  // parse the response as JSON
                .then(json_response => callback(json_response));  // Call the `callback` with the returned object
        },

        _api_post: function (url, dataDict, callback) {
            // it is not called from outside
            // sends the data to the API, and calls callback function
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(dataDict)
            })
                .then(response => response.json(), error => alert(error))
                .then(data => {callback(data)})
        },

        _api_delete: function (url, callback) {

            fetch(url, {
                method: 'DELETE',
            })
                .then(response => response.json(), error => alert(error))
                .then(data => {callback(data)})
        },

        init: function () {
        }
        ,
        getBoards: function (callback) {
            // the boards are retrieved and then the callback function is called with the boards

            // Here we use an arrow function to keep the value of 'this' on dataHandler.
            //    if we would use function(){...} here, the value of 'this' would change.
            this._api_get('/boards', (response) => {
                this._data['boards'] = response;
                callback(response);
            });
        },
        getBoard: function (callback) {
            // the board is retrieved and then the callback function is called with the board
        },
        getStatuses: function (callback) {
            // the statuses are retrieved and then the callback function is called with the statuses
            this._api_get('/statuses', (response) => {
                this._data['title'] = response;
                callback(response);
            });
        },
        getStatus: function (statusId, callback) {
            // the status is retrieved and then the callback function is called with the status
        },
        getCardsByBoardId: function (boardId, callback) {
            // the cards are retrieved and then the callback function is called wiqth the cards
            this._api_get(`/cards/${boardId}`, (response) => {
                this._data = response;
                callback(response);
            });
        },
        getCard: function (cardId, callback) {
            // the card is retrieved and then the callback function is called with the card
        },
        createNewBoard: function (dataDict, callback) {
            // creates new board, saves it and calls the callback function with its data
            this._api_post('/boards', dataDict, (data) => {
                this._data['new_board'] = data;
                callback(data)
            });
        },
        createNewCard: function (cardTitle, boardId, statusId, callback) {
            // creates new card, saves it and calls the callback function with its data
            let dataDict = { 'board_id': boardId,
                            'title': cardTitle,
                            'status_id': statusId,
                            'order': 0
            };
            this._api_post(`/cards/${boardId}`, dataDict, (data) => {
            this._data['newCard'] = data;
            callback(data)
            });
        },
        createNewStatus: function (dataDict, callback) {
            //send a request to save a new statusinput.value
            this._api_post('/statuses', dataDict, (data) => {
                this._data['newStatus'] = data;
                callback(data)
            });
        },
        editBoard: function (dataDict, callback) {
            // creates new board, saves it and calls the callback function with its data
            this._api_post('/edit-board', dataDict, (data) => {
                this._data['edited_board_data'] = data;
                callback(data)
            });
        },

         editCard: function (title, cardId, callback) {
             // the card is retrieved and then the callback function is called with the card
             let dataDict = {
                 'title': title,
                 'id': cardId
             };
             console.log(dataDict)
             this._api_post(`/edit-card`, dataDict, (data) => {
                 this._data['editedCard'] = data;
                 callback(data)
             })
         },

        deleteCardById: function(cardId, callback) {
            let dataDict = {'id': cardId};

            this._api_delete(`/edit-card/${cardId}`, (data) => {
                this._data['deletedCard'] = data;
                callback(data)
            })
        }

        // here comes more features
    };
