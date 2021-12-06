

/*
const numbers = arrayFromRange(9,15);

console.log(numbers);

function arrayFromRange(min,max){
const output =[];
    for(let element = min; element <= max;element++)
     output.push(element);

     return output;
}

function includes(array,element){
    for(let i of array)
   if (i === element)
   return true;

   return false;
   
}

console.log(includes(numbers,13));



const numbers =[10,12,16,14,19,13,20,13];
function except(array,excluded){
    const output =[];
for(let element of array)

if(!excluded.includes(element))
output.push(element);

return output;
}

const newArray = except(numbers,[13,20]);

console.log(newArray);


-------------------



const numbers=[1,2,3,4,5];

function move(array,index,offset){

    const output = [...array];

    if(offset >= array.length)
    return console.error('Invalid offset');
    

    output.forEach((element,i) => {
        if(element === index) {
        output.splice(i,1);
        output.splice(offset,0,element);     
        }
    });

    return output;
}

console.log(move(numbers,2,0));
*/


const numbers=[1,2,3,4,1,5,1];

const count = countOccurance(numbers,5);
console.log(count);

function countOccurance(array,searchElement){

   // let count =0;

    for(let element of array)
        if(element === searchElement)
        count++;
    

    return count;
}