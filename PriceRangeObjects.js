 const test = arraywithRange(-10,8);


function arraywithRange (min,max) {
    const sample =[];
    for (let x=min;x<=max;x++)
    sample.push(x);
    return sample;
}

console.log(test);