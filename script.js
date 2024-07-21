let timeLimit = 60;
let hitNum = 0;
let hit = 0;
let score = 0;

function gameEnd() {
    document.querySelector("#center-panel").innerHTML = `
    <div id="game-end-box">
        <h1 id="game-over-text"> Game over <h1/>
        <div class="tp-cont">
            <h3>FINAL SCORE</h3>
            <div id="score-box" class="info-box">${score}</div>
        </div>
    </div>
    `;
}

function timer() {
       let interval = setInterval(() => {
        if (timeLimit > 0) {
            timeLimit--;
            document.querySelector("#time-box").textContent = timeLimit;
        }
        else {
            clearInterval(interval);
            gameEnd();
        }
        }, 1000);
    
}
timer();

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

function gameBrain() {
    document.querySelector("#center-panel").addEventListener("click", (dets) => {
        hit = Number(dets.target.textContent);
        if (hit === hitNum) {
            // 1. Update score by 10
            scoreChange();
            // 2. update the hit target
            hitChange();
            // 3. create new bubbles 
            createBubbles();
        }
    })
}
gameBrain();
