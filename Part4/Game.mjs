export class Game {
    constructor(names){
        this.names=names;
        //6 different player objects
        this.playerObjects=[];
        this.boneYard;
        this.gameBoard;
        for(let i=0;i<this.names.length;i++){
            //create player object, and push into object array
            this.playerObjects.push(new Player(this.names[i],this.boneYard));
        }
    }
    playRound(tileNumber){
        this.boneYard = new Boneyard();
        this.boneYard.shuffle();
        this.gameBoard=new Board(this.playerObjects,tileNumber);
    
    }
    }