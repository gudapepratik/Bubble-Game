let timeLimit = 60;
let hitNum = 0;
let score = 0;
function timer() {
       let interval = setInterval(() => {
        if (timeLimit > 0) {
            timeLimit--;
            document.querySelector("#time-box").textContent = timeLimit;
        }
        else {
            clearInterval(interval);
        }
        }, 1000);
    
}
// timer();

function hitChange() {
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hit-box").textContent = `${hitNum}`;
}
hitChange();

function scoreChange() {
    score += 10;
    document.querySelector("#score-box").textContent = `${score}`;
}

function createBubbles() {
    // total bubbles created 192
    let clutter = "";
    for (let i=0; i< 192; i++) {
        let randomnum = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomnum}</div>`;
    }
    document.querySelector("#center-panel").innerHTML = clutter;
}

createBubbles();