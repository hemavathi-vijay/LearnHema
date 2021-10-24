const array = [80,92,85,95,99];

console.log(calculateGrade(array));

function calculateGrade(marks){

    let average = calcAverage(array);

    if(average < 60) return 'F';
    
    if(average < 70) return 'D';

    if(average < 80) return 'C';
       
    if(average < 90) return 'B';

    return 'A';
    
}

function calcAverage (array){

    let sum =0;

    for(let keys of array)     
    sum += keys;

    return sum / array.length;


}