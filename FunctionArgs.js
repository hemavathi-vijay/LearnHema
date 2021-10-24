const numbers = [1,2,3,4,5,6];

console.log(sum(numbers));

function sum(...args){
    if((args.length === 1) && (Array.isArray(args[0])))
        args = [...args[0]];
    
    return args.reduce((a,b) => a+b);
}
