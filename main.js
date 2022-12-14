class Game {
    constructor() {
        this.level = 1;
        this.points = 0;
    }
    upgrade() {
        this.points -= this.level * 10;
        this.level += 1;
    }
    earnPoints(points) {
        this.points += points;
    }
}
const game = new Game();

const pointsElement = document.getElementById("points");
const levelElement = document.getElementById("level");

function updateUI() {
    pointsElement.innerHTML = game.points;
    levelElement.innerHTML = game.level;
}

while (true) {
    // simulate earning points over time
    game.earnPoints(game.level);
    updateUI();
    if (game.points >= game.level * 10) {
        game.upgrade();
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
}
