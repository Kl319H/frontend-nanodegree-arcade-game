var Enemy = function() {
    var x = -tileWidth;
    var y = Math.round(tileHeight * getRandom(1, 3) - tileHeight / 3);
    Sprite.call(this, 'images/enemy-bug.png', x, y);
    this.speed = getRandom(100, 400);
    this.name = 'enemy';
};

Enemy.prototype = Object.create(Sprite.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if(this.x > ctx.canvas.width + tileWidth){
        this.reset();
    }
};

Enemy.prototype.onCollision = function(otherObj) {
    if(this.speed > otherObj.speed && this.x < otherObj.x && this.speed > 20) {
        this.speed = otherObj.speed - 20;
        this.x = otherObj.x - tileWidth;
    }
};

Enemy.prototype.reset = function() {
    this.x = -tileWidth;
    this.y = Math.round(tileHeight * getRandom(1, 3) - tileHeight / 3);
    this.speed = getRandom(100, 400);
};
