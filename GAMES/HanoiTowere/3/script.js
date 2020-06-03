let moves = 0;
let moveDisc = false;
let selectedDock = null;
let origDIv = null;

let scoreDiv = document.getElementById('score');


Array.from(document.getElementsByClassName('dock')).forEach((item) => {
    item.addEventListener('click', handleClick)
})


//handle click
function handleClick(e) {
    moveDisc ? moveToDock(this) : selectedDockD(this)
}


//selected Dock
function selectedDockD(div) {
    console.log(div)
    selectedDock = getFirstDisc(div)
    // Escapes event if person clicks empty div.
    if (!selectedDock) return;
    origDIv = div
    div.className += ' selected';
    toggleMoveDock();
}


//get only very first disc on selectedDock
function getFirstDisc(div) {
    console.log(div)
    return div.getElementsByTagName('div')[0];
}


//move different different toggles
function toggleMoveDock() {
    moveDisc = !moveDisc;
}


// *** until now selected disk move up on same dock ***//


//move disk on selctedDock after selected disk on selected dock
function moveToDock(div) {
    console.log(selectedDock)
    if (checkIfDisc(div) || checkDIscSizes(div, selectedDock)) {
        moves++;
        div.insertBefore(selectedDock, div.firstChild);
        console.log(scoreDiv)
        scoreDiv.innerHTML = moves;
    }
    origDIv.classList.remove('selected')
    toggleMoveDock();
}


//check if disc already there or not
function checkIfDisc(div) {
    return div.getElementsByTagName('div').length === 0;
}


//check disc sizes to maintain to follow ascending order
function checkDIscSizes(divOne, divTwo) {
    console.log(divOne, divTwo)
    return getFirstDisc(divOne).dataset.size > divTwo.dataset.size
}



