const sq = 156;
const output = findNextSquare(sq);
console.log('Output = ',output);

function findNextSquare(sq){

    if((Math.sqrt(sq)% 1) !=0)    return -1;
  
    do {
      ++sq;
    }while((Math.sqrt(sq)% 1) !== 0);

    return sq;
} 