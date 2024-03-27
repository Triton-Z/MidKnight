const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tile = {
    size: 32
};

// Define player properties
const player = {
    x: 5,
    y: 5,
    speed: 3.5
};

function img (src) {
    const image = new Image();
    image.src = src;
    return image;
}

const assets = {
    floor: Array.from({length: 8}, (_, i) => img(`./assets/floor_${i + 1}.png`))
};


window.onload = update;

//Key handler
let keys = {};
window.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});

// Update function
function update() {
    if (keys[87])  //W
        player.y -= player.speed;
    
    if (keys[83])  //S
        player.y += player.speed;
    
    if (keys[65]) // A
        player.x -= player.speed;
    
    if (keys[68])  // D
        player.x += player.speed;
    

    // Update camera to keep player centered
    const cameraX = player.x - canvas.width / 2;
    const cameraY = player.y - canvas.height / 2;

    // Render
    render(cameraX, cameraY);

    requestAnimationFrame(update);
}

const level = {
    floor: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 8))),
    walls: []
};


// Render function
function render(cameraX, cameraY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the tile map
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            ctx.drawImage(assets.floor[level.floor[x][y]], x * tile.size - cameraX, y * tile.size - cameraY, tile.size, tile.size);
        }
    }

    // Draw the player
    ctx.fillStyle = "#f00";
    ctx.fillRect(player.x - cameraX, player.y - cameraY, 30, 30);

    const thing = img("./assets/floor_4.png");
    thing.width = 100
    ctx.drawImage(thing, 50, 50);
}