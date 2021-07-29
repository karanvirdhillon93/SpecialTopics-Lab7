export class Tile {
constructor(left,right){
this.right=right;
this.left=left;
try{
if(left<0 || left>12){
    throw `Left Domino: ${left} to low or to high \nConstructor takes a left value between 0 and 12`;
    
}
else if(right<0 || right>12){
    throw `RIght Domino ${right} to low or to high \nConstructor takes a right value between 0 and 12`;
}
} catch(err){
    console.log(err);
}
}
toString(){
    return `[ ${this.left}, ${this.right} ]`;
}
}
/*
• Instantiated by a constructor that takes a left and right value between 0 and 12
• Contains a toString() method that returns the string representation of the tile as
follows:
[ left, right ]
For example:
[ 3, 11 ]
*/