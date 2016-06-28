var player = new Player();
var allEnemies = [];
var enemyCount = 3;
for(var i = 0; i < enemyCount; i++) {
    var enemy = new Enemy();
    allEnemies.push(enemy);
}
var collisionObjects = [];
collisionObjects.push(player);
collisionObjects.push(enemy);
var star = new Star();
allEnemies.push(star);
