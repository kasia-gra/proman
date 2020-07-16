import {dom} from "./dom.js";
import {dragCardsHandler} from "./drag_cards_handler.js"

// This function is to initialize the application
function init() {
    // init data
    dom.init();
    // loads the boards to the screen
    dom.loadBoards();
    dom.addNewBoard();
    dom.editBoardTitle();
    dragCardsHandler.InitCardsDragDropListeners();
}

init();