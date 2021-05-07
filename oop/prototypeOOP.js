// prototype assignments
let Character2 = function(){
    if (this.constructor === Character2){
        throw new Error("Can't instantiate Character2.");
    }
    this._position = {
        x:Math.floor(Math.random()*10),
        y:Math.floor(Math.random()*10)
    }
    
}

// setters and getters 
Character2.prototype = {
    set newPosition (newPos) {
        let {x, y} = newPos;
        if ((x >= 0 && x <= 10) && (y >= 0 && y <= 10)){
            this._position = newPos;
        }
        else{
            throw new Error("New position is out of bounds.");
        }
    },

    get currentPosition(){
        return `Player is at position x:${this._position.x} and y:${this._position.y} `;
    }
}

// Static property
Character2.prototype.countOfCharacters = 0;

let PlayerCharacter2 = function(){
    Character2.call(this);
    Character2.prototype.countOfCharacters++;
}

let NonPlayerCharacter2 = function(){
    Character2.call(this);
    Character2.prototype.countOfCharacters++;
}

PlayerCharacter2.prototype = Object.create(Character2.prototype);
PlayerCharacter2.prototype.constructor = PlayerCharacter2;


// Query for player position
let pc = new PlayerCharacter2();
console.log(pc.currentPosition);


// Set new position for player with setter
pc.newPosition = {x:10, y:8};
console.log(pc.currentPosition);

