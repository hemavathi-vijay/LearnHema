const quote = 'Something special is there.';

changeQuotes(quote);
function changeQuotes(quote){

    const quoteArray = quote.split(' ');

    console.log(quoteArray);
    let outputString ='';

    for( keys of quoteArray){

    outputString = outputString + ' ' +(keys.charAt(0).toUpperCase())+ keys.slice(1) ;
    console.log(quoteArray.indexOf(keys),' - ',keys);
    }

 console.log(outputString);
}