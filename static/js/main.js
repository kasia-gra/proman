import {dom} from "./dom.js";
import {util} from "./util.js"

// This function is to initialize the application
function init() {
    // init data
    dom.init();
    util.keepSessionActive();
    // loads the boards to the screen
}

init();