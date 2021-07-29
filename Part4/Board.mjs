/*Instantiated by constructor(players, startTile) that takes an array of up to 6 player
objects and the start tile (a double) that will be used to start the game.*/

export class Board {
    constructor(players, startTile){
        this.playerSet=[];
        this.startTile=startTile;
        var length = 5; // user defined length
        for(var i = 0; i < length; i++) {
            this.playerSet.push(players[i]);
            console.log(`${this.playerSet[i]}`);
        }
    }
}