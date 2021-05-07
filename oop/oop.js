class Character {
    static charactersCount = 0;

    constructor(){
        // prevents instantiation
        if (new.target === Character){
            throw new TypeError("Connot instantiate Character.");
        }
        this.position = {
            x:Math.floor(Math.random()*10),
            y:Math.floor(Math.random()*10),
        }
    }

    getCharacterPosition(){
        return `Players is at position x:${this.position.x} and y:${this.position.y} `;
    }

    set changePosition(newPosition){
        let {x, y} = newPosition;
        if ((x >= 0 && x <= 10) && (y>= 0 && y <= 10)){
            this.position.x = x;
            this.position.y = y;
        }
        else {
            throw new Error("Player new position exceeds game field.");
        }
        
    }
}

class PlayerCharacter extends Character{
    constructor(){
        super();
        Character.charactersCount++;
    }
}

class NonPlayerCharacter extends Character {
    constructor(){
        super();
        Character.charactersCount++;
    }
}

//c1 = new Character();                 this would throw error
pc = new PlayerCharacter();
console.log(pc.getCharacterPosition());
pc.changePosition = {y:9, x:2};
console.log(pc.getCharacterPosition());

// nonPlayerCharacter

npc = new NonPlayerCharacter();
console.log(npc.getCharacterPosition());
npc.changePosition = {y:1, x:1}
// npc.changePosition = {y:12, x:-1}       this would throw error
console.log(npc.getCharacterPosition())

// track number of characters
console.log("Number of characters is:", Character.charactersCount);