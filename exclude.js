const numbers =[1,2,3,4,5,6,7,8,9];

const finalOutput = excludes(numbers,[2,8]);

function excludes(numbers,excluded){

    const output =numbers;
    
       for(let ex of excluded)
        for(let num of output){
            if(num ===ex){
                let index = output.indexOf(num);
                output.splice(index,1);
            }
        }
        return output;
}


console.log(finalOutput);