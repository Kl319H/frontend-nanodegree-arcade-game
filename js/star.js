var Star = function() {
    var x = -tileWidth;
    var y = Math.round(tileHeight * getRandom(1, 3) - tileHeight / 4);
    Sprite.call(this, 'images/star.png', x, y);
    this.speed = getRandom(100, 400);
    this.name = 'star';
};

Star.prototype = Object.create(Sprite.prototype);
Star.prototype.constructor = Star;

// Update the star's position
Star.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if(this.x > ctx.canvas.width + tileWidth){
        this.reset();
    }
};

Star.prototype.onCollision = function(otherObj) {
    if(this.speed > otherObj.speed) {
        this.speed = otherObj.speed;
    }
};

Star.prototype.reset = function() {
    this.x = -tileWidth;
    this.y = Math.round(tileHeight * getRandom(1, 3) - tileHeight / 4);
    this.speed = getRandom(100, 400);
};
