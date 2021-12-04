function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    pawn.draw();
    pawn.update();
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

function scored() {
    score++
    gameSpeed += 0.05;
    pawn.x = canvas.width/2 - this.width/2;
    pawn.y = canvas.height - this.height - 40;
}