export class Player {
//Instantiated by a constructor(name, boneyard) that takes a name and an initialized boneyard.
    constructor(name, boneyard){
        this.name=name;
        this.boneyard=new Boneyard();
//Added in extra step to shuffle boneyard created
        this.boneyard.shuffle();
        this.hand=[];
    }
//Has a drawTiles() method that draws the initial 15 tiles from the boneyard
    drawTiles(){
        for(var i=0;i<15;i++){
            this.hand.push(boneyard.draw());
            
        }
    }
//Has a drawTile() method that draws a single tile from the boneyard.
    drawTile(){
        hand.push(boneyard.drawTile());
    }
/*Contains a toString() method that returns the string representation of the player as
follows:
Player: John
Tiles: 1. [4, 5], 2. [2, 1], 3. [6, 9], … (tiles currently in John’s hand, numbered)*/
    toString(){
        var handCount;
        for(var i=1;i<=this.hand.length;i++){
            handCount=handCount+`Tiles ${i}. ${this.hand[i]}`;
        }
        
        return `Player: ${this.name} \n Tiles: ${handCount} `;
    }
}
