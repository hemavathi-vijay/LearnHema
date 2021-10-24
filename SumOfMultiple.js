console.log(sum(10));

function sum(num){
    let num_return =0;

for(let x=0;x <=num;x++) {

 if((x %3 === 0) ||(x% 5 ===0))
     num_return = num_return + x;
}

return num_return;

}