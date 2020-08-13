export const util = {
    extractId: function (node) {
        let id;
        node.classList.forEach(
            c => id = c.match(/^.*?(\d+)$/)
        );
        return id[1];
    },
    toggleDraggable: function (node) {
        node.getAttribute('draggable') === 'true' ?
            node.setAttribute('draggable', 'false') :
            node.setAttribute('draggable', 'true');
    },

    keepSessionActive: function () {
        window.onload = function () {
            localStorage.clear();
        };
    },

    showButtonsForLoggedInUser: function () {
        const addPrivateBoardButton = document.getElementById('add-private-board-button');
        addPrivateBoardButton.classList.remove("hidden")
    },

    hideButtonsIfLoggedOut:  function () {
        const addPrivateBoardButton = document.getElementById('add-private-board-button');
        addPrivateBoardButton.classList.add("hidden")
    }
}
