// Creating variables of all canvas (1-5) and assigning values to them 
const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;

//global variables
// Game Logic Vars
const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;
let safe = false;

// Animation Vars
const particlesArray = [];
const maxParticles = 300;
const ripplesArray = [];

// Obstacle Vars
const carsArray = [];
const logsArray = [];

//Land Enviroment Image
const backgroundLand = new Image();
backgroundLand.src = 'BackgroundLand.PNG';

//Grass Patch Image
const backgroundGrass = new Image();
backgroundGrass.src = 'BackgroundGrass.PNG';

//Collision Image
const collisions = new Image();
collisions.src = 'Collisions.PNG';

//Turtle Image
const turtle = new Image();
turtle.src = 'turtles.PNG';

//Log Image
const log = new Image();
log.src = 'Logs.PNG'

//Car Image
const car = new Image();
car.src = 'Cars.PNG';
let numberOfCars = 3;

//Frog Image
const froggerSprite = new Image();
froggerSprite.src = 'FroggerSprite.PNG';
