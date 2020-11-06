import {dom} from "./dom.js";
import {util} from "./util.js"
import {connect} from "./ws_connection.js";

// This function is to initialize the application
function init() {
    // init data
    dom.init();
    util.keepSessionActive();
    connect();
    // loads the boards to the screen
}

init();