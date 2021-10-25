

const testNumbers =[1,3,4,5,6,7,2];

let test = false;


function includes (
    array,searchElement){
    for (let num of array)
        if (num === searchElement)
        return true;

        return false;
}

test = includes(testNumbers,2);

console.log(test);