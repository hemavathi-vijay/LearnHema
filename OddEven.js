
ShowNumbers(8);

function ShowNumbers(limits){
    if((typeof limits) =='number'){
        console.log('Welcome to Odd even program');
    } else {
         console.log('Input not a number.');

         return;
    }
    for(let x = 0; x<= limits ; x++){
/*
            if( x%2 === 0 )
            console.log(x,'- EVEN');
            else
            console.log(x,'- ODD');
  */
    const iMessage = (x %2 ===0) ? 'ODD' : 'EVEN';
    
    console.log(x,iMessage);
        
    }
}