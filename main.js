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
    let maze = [];
    maze[0] = {
        floor: [
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
            [1,1,1,1,1],
    ]
    }
}