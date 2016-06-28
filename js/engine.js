var tileWidth = 101;
var tileHeight = 83;

(function(global) {
    var doc = global.document,
    win = global.window,
    canvas = doc.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    lastTime;

    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    /* This function serves as the kickoff point for the game loop itself
    * and handles properly calling the update and render methods.
    */
    function main() {
        var now = Date.now(),
        dt = (now - lastTime) / 1000.0;
        //ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        update(dt);
        render();
        /* LastTime variable is used to determine the time delta
        * for the next time this function is called.
        */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
        * function again as soon as the browser is able to draw another frame.
        */
        if(global.paused === false) {
            win.requestAnimationFrame(main);
        }

    }

    function init() {
        lastTime = Date.now();
        main();
    }

    function update(dt) {
        updateEntities(dt);
        // checkCollisions();
    }

    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }

    /* draws the "game level", it will then call
    * the renderEntities function.
    */
    function render() {
        var rowImages = [
            'images/grass-block.png',   // Top row is water
            'images/stone-block.png',   // Row 1 of 3 of stone
            'images/stone-block.png',   // Row 2 of 3 of stone
            'images/stone-block.png',   // Row 3 of 3 of stone
            'images/grass-block.png',   // Row 1 of 2 of grass
            'images/grass-block.png'    // Row 2 of 2 of grass
        ],
        numRows = 6,
        numCols = 5,
        row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities();
    }

    function renderEntities() {
        /* Loop through all of the objects within the allEnemies array and call
        * the render function you have defined.
        */
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
    }

    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-princess-girl.png',
        'images/star.png'
    ]);
    Resources.onReady(init);

    global.ctx = ctx;
    global.paused = false;
    global.pauseGame = function() {
        global.paused = true;
    }

    global.unpauseGame = function() {
        global.paused = false;
        main();
    }

})(this);
