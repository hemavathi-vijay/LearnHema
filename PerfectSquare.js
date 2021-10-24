const sq = 25;
const output = findNextSquare(sq);
console.log('Output = ',output);

function findNextSquare(sq){

    const result = Math.sqrt(sq)% 1;

    if(result !=0)    return -1;
  
    do {
      ++sq;
    }while((Math.sqrt(sq)% 1) !== 0);

    return sq;
} 