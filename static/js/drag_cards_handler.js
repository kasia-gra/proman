export let dragCardsHandler = {

    InitCardsDragDropListeners: function f() {
        DragStart();
        DragEnd();
        dragEnter();
        dragLeave();
        dragOver();
        dragDrop();

    }
}

let DragStart = function () {
    document.addEventListener('dragstart', function (e) {
        if (e.target && e.target.className == 'card') {
            e.target.classList.add("dragged")
        }
    });
}


let DragEnd = function () {
    document.addEventListener('dragend', function (e) {
        if (e.target && e.target.className == 'card') {
            console.log("DRAG ENDED");
            e.target.classList.remove("dragged");
        }
    });
}

let dragEnter = function () {
    document.addEventListener('dragenter', function (e) {
        if (e.target && e.target.className == "board-column-content") {
            let Slot = e.target;
            console.log("TEST")
        }
    });
}


let dragLeave = function () {
    document.addEventListener('dragleave', function (e) {
        if (e.target && e.target.className == "board-column-content") {
            let Slot = e.target;
        }
    });
}


let dragOver = function () {
    document.addEventListener('dragover', function (e) {
        if (e.target && e.target.className == "board-column-content") {
            let Slot = e.target;
            e.preventDefault();
        }

    });
}


let dragDrop = function () {
    document.addEventListener('drop', function (e) {
        if (e.target && e.target.className == "board-column-content") {
            console.log("dropping");
            e.preventDefault();
            let Slot = e.target;
            let draggedElement = document.querySelector(".dragged");
            Slot.append(draggedElement);
            draggedElement.classList.remove("dragged");
        }
    });

}

