const socket = io();


export const connect = function () {
    socket.on('message', messageReceiver);
    $('#save-status').on('click', messageTransponder);
}

function messageReceiver(msg) {
    console.log('Msg received:', msg);
    const syncButton = document.querySelector('#manual-sync');
    syncButton.style.color = 'green';
    syncButton.on('click', () => syncButton.style.removeProperty('color'));
}

function messageTransponder() {
    const msg = 'User change made';
    socket.send(msg);
    console.log('Msg sent:', msg);
}