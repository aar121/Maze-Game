    let mazes = [];
    mazes[0] = {
        tile: [
            [1,1,0,0,1],
            [1,0,0,0,0],
            [0,0,1,1,0],
            [0,0,0,1,0],
            [0,1,0,1,0]
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
    mapdesign:'red-blue'
    };  


function MazeGame(id, maze) {
    this.prop = document.getElementById(id);
    this.tileNames = ['floor', 'wall'];
    this.tilesDimension = 45; 
    this.map = maze.tile;
    this.mapdesign = maze.mapdesign;
    this.character = {...maze.character};
    this.endTarget = {...maze.endTarget};
}

MazeGame.prototype.populateMap = function() {
    this.prop.className = 'container ' + this.mapdesign;
    let tiles = document.getElementById('tiles');
    tiles.innerHTML = '';
    for (let y =0; y < this.map.length; ++y) {
         for (let x = 0; x < this.map[y].length; ++x) {
            let tileCode = this.map[y][x];
            let tileName = this.tileNames[tileCode]; 
            let tile = this.createProp(x, y, tileName);
            tiles.appendChild(tile);
         }
    }
}   
MazeGame.prototype.createProp = function(x,y,name) {
    let prop = document.createElement('div');
    prop.className = name;
    prop.style.width = prop.style.height = this.tilesDimension + 'px';
    prop.style.left = x * this.tilesDimension + 'px';
    prop.style.top = y * this.tilesDimension + 'px';
    return prop;
}
MazeGame.prototype.increaseSize = function(){
    let gamemap = this.prop.querySelector('.map');
    gamemap.style.height = this.gamemap.length * this.tilesDimension + 'px';
    gamemap.style.width = this.gamemap[0].length * this.tilesDimension + 'px';
}
function start() {
    let game = new MazeGame('container-1', mazes[0]);
    game.populateMap();
    game.increaseSize();
    game.placeCharacter('');
    game.placeCharacter('');
}
start();

MazeGame.prototype.setcharacter = function(input) {
    let x = this[input].x
    let y = this[input].y
    let character = this.createProp(x,y,input);
    character.id = input;
    character.style.borderRadius = this.tilesDimension + 'px';
    let maplayout = this.prop.querySelector('#character');
    maplayout.appendChild(character);
    return character
}