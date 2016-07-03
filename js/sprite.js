var Sprite = function(image, x, y) {
    this.sprite = image;
    this.width = tileWidth - 15;
    this.height = tileHeight - 15;
    this.x = x;
    this.y = y;
    this.yOffset = 75;
}

Sprite.prototype.render = function() {
    //ctx.clearRect(this.x,this.y,this.width, this.height);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.collision();
    //ctx.rect(this.x,this.y + this.yOffset,this.width,this.height);
    //ctx.stroke();

};

Sprite.prototype.collision = function() {
    var rect1 = this;
    var r1y = rect1.y + this.yOffset;
    collisionObjects.forEach(function(rect2){
        var r2y = rect2.y + rect2.yOffset;
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            r1y < r2y + rect2.height &&
            rect1.height + r1y > r2y) {
                if(rect1 != rect2){
                    //console.log("collision detected!", rect1, rect2);
                    rect1.onCollision(rect2);
                    rect2.onCollision(rect1);
                }
            }
        });
    }

//TODO: Sprites are almost unusable as currently sized. Resize all sprites and create a sprite sheet. WIll have to refactor all code to reflect changes
