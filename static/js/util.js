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
        window.onbeforeunload = function (e) {
            window.onunload = function () {
                window.localStorage.isMySessionActive = "false";
            }
            return undefined;
        };

        window.onload = function () {
            window.localStorage.isMySessionActive = "true";
        };
    }
}
