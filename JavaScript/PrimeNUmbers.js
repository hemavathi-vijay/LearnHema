
showPrimes(20);

function showPrimes(limit){

    for(let x=2; x <= limit;x++){

        let isPrime = true;

        for(let factor = 2; factor < x; factor++){

            if(x % factor ===0) {
            isPrime = false;
            break;
            }  
               
        }
        if(isPrime) console.log(x);
    }
}