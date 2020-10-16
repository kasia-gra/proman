import {htmlCreator} from "./html_creator.js";

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
        window.onbeforeunload = function() {
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_name");
        return '';
};
    },

    showButtonsForLoggedInUser: function () {
        const addPrivateBoardButton = document.getElementById('add-private-board-button');
        addPrivateBoardButton.classList.remove("hidden")
    },

    hideButtonsIfLoggedOut:  function () {
        const addPrivateBoardButton = document.getElementById('add-private-board-button');
        addPrivateBoardButton.classList.add("hidden")
    },

    getLoggedUserData: function (dataDict) {
        dataDict["user_id"] = parseInt(localStorage.getItem("user_id"));
        dataDict["user_name"] = localStorage.getItem("user_name");
    },

    getPublicUserdata: function (dataDict) {
        dataDict["user_id"] = null;
        dataDict["user_name"] = null;
    },

    clearAllBoards: function () {
        const boardContainer = document.getElementsByTagName("SECTION")
        Array.prototype.slice.call(boardContainer).forEach(function(item) {
        item.remove();
        });
    },

}