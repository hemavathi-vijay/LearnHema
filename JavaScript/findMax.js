const numbers =[3,4];

const maxi = getMax(numbers);

console.log(maxi);

function getMax(numbers){

    /*
    let maxNum = numbers[0];

    for(let i=1;i< numbers.length;i++){

        if(numbers[i]> maxNum)
        maxNum = numbers[i];
    }

    return maxNum;
*/
    return numbers.reduce((a,b) =>(a > b) ? a : b);
    
}