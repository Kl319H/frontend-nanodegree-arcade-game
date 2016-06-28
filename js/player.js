var Player = function() {
    this.startX = 202;
    this.startY = 387;
    Sprite.call(this, 'images/char-princess-girl.png', this.startX, this.startY);
    this.name = 'player';
    this.score = -1;
    this.addScore();
};

Player.prototype = Object.create(Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.addScore = function() {
    this.score += 1;
    ctx.clearRect(0,0,ctx.canvas.width, 30);
    ctx.font = "32px roboto";
    ctx.fillText("Score: " + this.score, 10, 30);
};

Player.prototype.reset = function() {
    this.x = this.startX;
    this.y = this.startY;
    this.score = -1;
    this.addScore();
};

Player.prototype.update = function(dt) {

};

Player.prototype.onCollision = function(otherObj) {
    if(otherObj.name === 'star') {
        otherObj.x = - 1000;
        otherObj.speed = 0;
        setTimeout(function(){
            otherObj.reset();
        },3000)
        this.addScore();
    }
    if(otherObj.name === 'enemy') {
        GameModal.showGameOver();
        //this.reset();
        //gameOverModal.style.display = "block";
        console.log(GameModal);
    }
};

Player.prototype.handleInput = function(key) {
    var self = this;
    if(paused === true) {
        return;
    }
    var move = {
        'left': function() {
            if(self.x !== 0) {
                self.x -= tileWidth;
            }
        },
        'right': function() {
            if(self.x !== 404) {
                self.x += tileWidth;
            }
        },
        'up': function() {
            if(self.y !== -28) {
                self.y -= tileHeight;
            }
        },
        'down': function() {
            if(self.y !== 387) {
                self.y += tileHeight;
            }
        }
    }
    if(move[key]) {
        move[key]();
    }
    if(self.y === -28) {
        GameModal.showGameWin();
    }
    console.log("player.x:", self.x, "player.y:", self.y);
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
