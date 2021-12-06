function handleScoreBoard(){
    //Score Text on Canvas
    ctx4. fillStyle = 'black';
    ctx4.strokeStyle = 'black';
    // Testing Verdana ???
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Score', 265, 15);
    ctx4.font = '60px Verdana';
   // score vas in Game-Logic
    ctx4.fillText(score, 270, 65);
    //This will should how many times the player has been hit by a car and falls into water
    ctx4.font = '15px Verdana';
    ctx4.strokeText('Collisions:' + collisionsCount, 10, 175);
    
    // Displays Game speed after player has cross the finish line 
    // The toFixed method makes the game speed meter use 1 digit numbers 
    ctx4.strokeText('Game Speed:' + gameSpeed.toFixed(1), 10, 195);
}