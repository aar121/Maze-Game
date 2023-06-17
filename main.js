function characterwalk(left, up) {
    let direction = null;
    let x = left; 
    let y = up;
    if(direction === 'north') {y+=1}
    if(direction === 'south') {y-=1}
    if(direction === 'east') {x+=1}
    if(direction === 'west') {x-=1}
}

let sprite = Image('assets/characters/0_Golem_Idle_000.png')

function charactermove(direction) {
    if(direction === null) {
        sprite.src = 'assets/characters/0_Golem_Idle_000.png'
    }
    if(direction === 'north') {
        sprite.src = 'assets/characters/0_Golem_Walking_004.png'
    }
    if(direction === 'west') {
        sprite.src = 'assets/characters/0_Golem_Walking_004.png'
    }
    if(direction === 'east') {
        sprite.src = 'assets/characters/0_Golem_Walking_004.png'
    }
    if(direction === 'south') {
        sprite.src = 'assets/characters/0_Golem_Walking_004.png'
    }
}

function BuildMaze() {
    let mazes = [];
    mazes[0] = {
        tile: [
            [1,0,0,1,1],
            [1,1,0,0,1],
            [0,0,1,0,1],
            [0,0,1,1,1],
            [1,0,1,0,1]
            //the 0s and 1s represent the map tiles, either a wal tile or a floor tile
    ], 
    character: {
        x:0, 
        y:4
    },
    //y and x are the coordinates for the character 
    endTarget: {
        x: 4,
        y: 1
    },
    mapdesign:'black&white'
    };  
}

function mazeGame(id, maze) {
    this.prop = document.getElementById(id);
    this.tileNames = ['floor', 'wall'];
    this.tilesDimension = 40; 
    this.map = maze.map;
    this.mapdesign = maze.mapdesign;
    this.character = {...maze.character};
    this.endTarget = {...maze.endTarget};
    this.character.prop = null;
}

mazeGame.prototype.populatemap = function() {
    this.prop.className = 'container ' + this.mapdesign;
    let tiles = document.getElementById('tiles');
    for (let y =0; y < this.maze.length; ++y) {
         for (let x = 0; x < this.maze[y].length; ++x) {
            let tileCode = this.map[y][x];
            let tileName = this.tileNames[tileCode];
            let tile = this.createProp(x, y, tileName);
            tiles.appendChild(tile);
         }
    }
}   
mazeGame.prototype.createProp = function(x,y,name) {
    let prop = document.createElement('div');
    prop.className = type;
    prop.style.width = prop.style.height = this.tilesDimension + 'px';
    prop.style.left = x*this.tilesDimension + 'px';
    prop.style.top = y*this.tilesDimension + 'px';
    return prop;
}

function init() {
    let Game = new Game(container-1,mazes[0]);
    mazeGame.populatemap();
}
init();