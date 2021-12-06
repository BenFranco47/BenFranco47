function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    
    //Ripple Function
    handleRipples();
    
    //Background Land 
    ctx2.drawImage(backgroundLand, 0, 0, canvas.width, canvas.height);
    handleParticles();
    
    //Player 
    pawn.draw();
    pawn.update();

    handleObstacles();
    handleScoreBoard();
    ctx4.drawImage(backgroundGrass, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
}

animate();

// Event Listeners
window.addEventListener('keydown', function(e) {
    keys = [];
    keys[e.keyCode] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]) {
        pawn.jump();
    }
});

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode];
    pawn.moving = false;
});

// Important note: In order to restart the player we need this function to call back to the pawn class!
function scored() {
    score++;
    gameSpeed += 0.05;
    pawn.x = canvas.width/2 - pawn.width/2;
    pawn.y = canvas.height - pawn.height - 40;
}

