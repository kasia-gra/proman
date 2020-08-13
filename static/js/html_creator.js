export const htmlCreator = {

    createBoard: function (boardTitle, boardId) {
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
    },
    createColumnsStatusesForBoard: function (statusId, columnStatusTitle) {
        return `
            <div class="board-column status-${statusId}">
            <div class="board-column-title-container">
                <div class="board-column-title">${columnStatusTitle}</div>
                <div class="status-remove"><i class="fas fa-trash-alt delete-status"></i></div>
            </div>
                <div class="board-column-content"></div>
            </div>
    `
    },

    createCard: function (card) {
        if (!card.title) {
            card.title = "Empty card"
        }
        return `
            <div class="card" draggable="true" id="${card.id}" data-board-id='${card.board_id}' data-status='${card.status_id}'>
                <div class="card-remove"><i class="fas fa-trash-alt delete-card"></i></div>
                <div class="card-title">${card.title}</div>
            </div>
        `
    },

    addUserMenu: function (user) {
    let navbar =  document.querySelector(".navbar-right")
    navbar.innerHTML = `
        <li>
            <a class="nav-link disabled">Logged in as ${user.name}</a>
        </li>
        <li>
            <a class="nav-link" id="logout" href="#"><span class="link fas fa-sign-out-alt"></span> Log out</a>
        </li>
        `;
},

    deleteUserMenu: function () {
        let navbar =  document.querySelector(".navbar-right")
        navbar.innerHTML = `
        <li>
            <a class="nav-link" id="register" data-toggle="modal" data-target="#modalRegisterForm"
                href="#"><span class="link fas fa-user-plus"></span> Sign in</a>
        </li>
        <li>
            <a class="nav-link" id="login" data-toggle="modal" data-target="#modalLoginForm"
                href="#"><span class="link fas fa-sign-in-alt"></span> Log in</a>
        </li>
    `;}

}