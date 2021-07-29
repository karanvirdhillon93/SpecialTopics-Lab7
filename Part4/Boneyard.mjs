/*
Boneyard
• Has a constructor() that creates a complete set of 91 Mexican trains tiles.
• Contains a shuffle() method that randomizes the order of the tiles.
• Contains a draw() tile method that picks the next tile from the boneyard and returns it
to the caller.
• Contains an isEmpty() method that returns true if there are no more tiles in the
Boneyard and false otherwise.
*/
var lengthOfSet;
var TrainSet= [];
export class Boneyard {
constructor(){
    //console.log(TrainSet)
    //Empty array to hold dominos 
    var count=0;
    for(var i=0;i<=12;i++){
        for(var ii=i;ii<=12;ii++){
            //inserting all values into our array
           TrainSet.push([i,ii]);
        }      
    }
    console.log(TrainSet.length);
    lengthOfSet=TrainSet.length;

}
draw(){
 return TrainSet.pop();
}

isEmpty(){
    if(TrainSet==0){
        return true;
    }
    else{
        return false;
    }
   

}
/*
NOTE: Not my function I found this online , and used it in my code
//lInk to resource: https://javascript.info/array-methods#shuffle-an-array
*/
shuffle(){
    TrainSet.sort( () => 0.5 - Math.random() );
    console.log("shuffling dominos");
}

}
