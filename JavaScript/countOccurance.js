try {

  const numbers =7;
  
  const count = countOccurences(numbers,5);
  
  console.log(count);

}

catch(e){

  console.log(e.message);
}

function countOccurences(numbers,searchNum){

  if(!Array.isArray(numbers)){
    throw new Error('Invalid Array');
  }

return numbers.reduce((accumelator,current) => {
const occur = current === searchNum ? 1:0;
return (accumelator + occur);
},0);


}