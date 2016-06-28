var GameModal = {};

GameModal.init = function() {
    var self = this;
    self.modal = document.getElementById('game-modal');
    self.textContainer = document.getElementById("game-modal-content");

    document.addEventListener('keyup', function(e) {
        //Key code 13 = "Enter"
        if(e.keyCode === 13) {
            self.hide();
        }
    });
};

GameModal.changeText = function(text) {
    this.textContainer.textContent = text;
}

GameModal.showGameOver = function() {
    pauseGame();
    this.changeText("You Lost!");
    this.modal.style.display = "block";
}

GameModal.showGameWin = function() {
    pauseGame();
    this.changeText("You Win!");
    this.modal.style.display = "block";
}

GameModal.hide = function() {
    var self = this;
    unpauseGame();
    player.reset();
    setTimeout(function(){
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        player.reset();
        self.modal.style.display = "none";
    },100);

}

GameModal.init();
