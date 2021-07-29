import process from 'process';
import {
    Tile,
    Boneyard,
    Player,
    Train,
    Board,
    Game
} from './trainObject.mjs';

//need to shuffle to get random order

/*
let boneYard = new Boneyard();
boneYard.shuffle();
let player = new Player('James', boneYard);
player.drawTiles();
console.log(player.toString());

let train = new Train(12, player);

let tile = new Tile(5, 12);

if (!train.canPlaceTile(tile)) {
    console.log(`Oops, should be able to play ${tile.toString()}`);
    process.exit(1);
}

train.placeTile(tile);

tile = new Tile(7, 12);
if (train.canPlaceTile(tile)) {
    console.log(`Oops, should note be able to play ${train.toString()}) ${tile.toString()}`);
    process.exit(1);
}

tile = new Tile(5, 7);
train.placeTile(tile);
console.log(train.toString());
*/

async function main(){
    let boneYard = new Boneyard();
    boneYard.shuffle();
    let center=boneYard.drawDouble(12);
    let player1 = new Player('Kevin', boneYard);
    player1.drawTiles();
    let player2 = new Player('Karn', boneYard);
    player2.drawTiles();
    let player3 = new Player('Joshua', boneYard);
    player3.drawTiles();
    let testBoard = new Board([player1,player2,player3],center);
    //testBoard.toString();
    let g = new Game (["Kevin","Joshua","Baphine"]);
    g.recordGame();
    await g.getLastGame();
    g.playRound(12);
}

main();



