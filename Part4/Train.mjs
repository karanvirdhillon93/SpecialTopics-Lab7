/*
Instantiated by a constructor(startNumber, player) that takes a start number between
0 and 12 and a player.*/
export class Train{
    constructor(startNumber, player){
        this.startNumber = startNumber;
        this.player=player;
        try {
            if(this.startNumber<0){
                throw `${this.startNumber}:Too Small`;
            }
            else if(this.startNumber>12){
                throw`${this.startNumber}: Too Big`;
            }
          } catch(error){
            console.log(error);
          }
       
    }
/*sHas a placeTile(tile) method that adds a tile to the train, but only if legal- that is one of
the numbers on the tile to be placed matches the last number showing on the train. For
example [start number: 3] [3, 4] [4, 7] [7, 7] [7, 2] … can play [2, 6] but not [3, 5]
*/
    placeTile(tile){
        var leftTile=String(tile).charAt(2);
        //tile.toString().search(/\d/);
        var rightTile=String(tile).charAt(2);
       
}
}