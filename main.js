let mazes = [];
mazes[0] = {
  tile: [
    [1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 0, 0],
    //the 0s and 1s represent the map tiles, either a wall tile or a floor tile
  ],
  character: {
    x: 0,
    y: 4,
  },
  //y and x are the coordinates for the character
  endTarget: {
    x: 7,
    y: 4,
  },
  mapdesign: "red-blue",
};

function MazeGame(id, maze) {
  this.prop = document.getElementById(id);
  this.tileNames = ["floor", "wall"];
  this.tilesDimension = 45;
  this.map = maze.tile;
  this.mapdesign = maze.mapdesign;
  this.character = { ...maze.character };
  this.endTarget = { ...maze.endTarget };
}

MazeGame.prototype.populateMap = function () {
  this.prop.className = "container " + this.mapdesign;
  let tiles = document.getElementById("tiles");
  tiles.innerHTML = "";
  for (let y = 0; y < this.map.length; ++y) {
    for (let x = 0; x < this.map[y].length; ++x) {
      let tileCode = this.map[y][x];
      let tileName = this.tileNames[tileCode];
      let tile = this.createProp(x, y, tileName);
      tiles.appendChild(tile);
    }
  }
};
MazeGame.prototype.createProp = function (x, y, name) {
  let prop = document.createElement("div");
  prop.className = name;
  prop.style.width = prop.style.height = this.tilesDimension + "px";
  prop.style.left = x * this.tilesDimension + "px";
  prop.style.top = y * this.tilesDimension + "px";
  return prop;
};
MazeGame.prototype.setCharacter = function (name) {
  let x = this[name].x;
  let y = this[name].y;
  let character = this.createProp(x, y, name);
  character.id = name;
  character.style.borderRadius = this.tilesDimension + "px";
  let maplayout = this.prop.querySelector("#character");
  maplayout.appendChild(character);
  return character;
};

//add a function that will move the character from the starting point to the target

//add a function that will update the score of the character

MazeGame.prototype.moveCharacter = function (event) {
  event.preventDefault();
  if (event.code < 1 || event.code > 4) {
    return;
  }
  switch (event.code) {
    case "ArrowLeft":
      this.moveLeft();
      break;
    case "ArrowUp":
      this.moveUp();
      break;
    case "ArrowRight":
      this.moveRight();
      break;
    case "ArrowDown":
      this.moveDown();
      break;
  }
};
MazeGame.prototype.end = function () {
  if (
    this.character.y == this.endTarget.y &&
    this.character.x == this.endTarget.x
  ) {
    window.alert("You win!");
    Sound.play
  } else {
    return;
  }
};
MazeGame.prototype.keypress = function () {
  document.addEventListener("keydown", (event) => {
    this.moveCharacter(event);
    this.end();
  });
};
MazeGame.prototype.moveLeft = function () {
  if (this.character.x == 0) {
    return;
  }
  let next = this.map[this.character.y][this.character.x - 1];
  if (next == 1) {
    return;
  }
  this.character.x -= 1;
  this.updateHorizontalPosition();
  this.scoremaker();
};
MazeGame.prototype.moveUp = function () {
  if (this.character.y == 0) {
    return;
  }
  let next = this.map[this.character.y - 1][this.character.x];
  if (next == 1) {
    return;
  }
  this.character.y -= 1;
  this.updateVerticalPosition();
  this.scoremaker();
};
MazeGame.prototype.moveRight = function () {
  if (this.character.x == this.map[this.character.y].length - 1) {
    return;
  }
  let next = this.map[this.character.y][this.character.x + 1];
  if (next == 1) {
    return;
  }
  this.character.x += 1;
  this.updateHorizontalPosition();
  this.scoremaker();
};
MazeGame.prototype.moveDown = function () {
  if (this.character.y == this.map.length - 1) {
    return;
  }
  let next = this.map[this.character.y + 1][this.character.x];
  if (next == 1) {
    return;
  }
  this.character.y += 1;
  this.updateVerticalPosition();
  this.scoremaker();
};
MazeGame.prototype.updateHorizontalPosition = function () {
  this.character.prop.style.left =
    this.character.x * this.tilesDimension + "px";
};
MazeGame.prototype.updateVerticalPosition = function () {
  this.character.prop.style.top = this.character.y * this.tilesDimension + "px";
};

let score = 0;

MazeGame.prototype.scoremaker = function () {
    score++
    let scorecontainer = document.getElementsByClassName("scorecontainer")[0];
    scorecontainer.innerHTML = "Score: " + score;
  };

let Sound = new Audio('fanfare.mp3');

function start() {
  let game = new MazeGame("container-1", mazes[0]);
  game.populateMap();
  game.setCharacter("endTarget");
  let placement = game.setCharacter("character");
  game.character.prop = placement;
  game.keypress();
}
start();