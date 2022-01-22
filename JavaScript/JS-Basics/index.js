
/*
const movie = {
    title : 'Roja',
    releaseYear : 1992,
    rating : 4.9,
    Director :'Mani-rathnam_director-finally',
    LeadHero : 'Aravind'
}
showObj(movie.Director);

function showObj(obj){

    let output = obj.toString();
  
    
    for(let value of output){
        if(value === "-" || value === "_") {
        let index = output.indexOf(value)+1;
        let caps = output.charAt(index).toUpperCase();
        output = output.replace(value," ").replace(output.charAt(index),caps);
        console.log(value,caps,index);
    }
        
    }

    console.log(output);
}

//--------------------------------------------------------------------------------------------

const word = "HemavathiV";


if(word.length%2)
console.log(word.charAt(word.length/2));

else {
console.log(word.slice((word.length/2)-1,(word.length/2)+1));
}

//------------------------------------------------------------------------------

const output = alphabetPosition("TThis is the funniest it can't get any bad!");

function alphabetPosition(text) {

    const alphabetNumbers = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const output = [];
    text = text.toLowerCase().replaceAll(' ','');

    for(let element of text) {
        for(let num of alphabetNumbers) {
        if (num === element)
        output.push(alphabetNumbers.indexOf(num));

         }
    }

    console.log(alphabetNumbers,text,output.toString());
    return output.toString();
  }
//____________________________________________________________________________________________________________________________________
  */
/*
const result = tribonacci([1,1,1],10);

console.log(result);

function tribonacci(signature,n){
    const output = [...signature];

    for(let key=3; key <= n-1;key++){
        output.push(output[key-1]+output[key-2]+output[key-3]);
    }
    console.log(output);

    return output;
  }

  */
//--------------------------------------------------------------
/*
  const numbers =[1,2,3,4,5,6,7,8,9,0];

  const output =`( ${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  console.log(output);
*/

const str = " The worse website everio!";
console.log(disemvowel(str));
function disemvowel(str) {

    return str.replace(/[aeiou]/gi,"") ;
  }