const countArray = [0,1,7,8,null,undefined,NaN,8];

let icount=0;

CountTruthy(countArray);

console.log(icount);

function CountTruthy (countArray){

for (let value of countArray)
  if(value)
   icount++;

   return icount;
}