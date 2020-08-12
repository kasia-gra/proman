export let htmlTemplates = {

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
    }
}