
    let output =[];
function getDirection(){

    const directions = ['n','e','w','s'];    
    
    for(let x=0;x<=10;x++)
        output.push(Math.floor(Math.random() * directions.length));
    
     console.log(output);
}

getDirection();
let walk = ['n','n','n','s','n','s','n','s','n','s'];
let result = isWalkValid(walk);
console.log('IswalkValid - ',result);

function isWalkValid(walk){

     let east =0,west =0,north =0,south =0;

    if(walk.length !== 10)
      return false;

    for(let x=0;x< walk.length; x++){

        switch(walk[x]) {
      
            case 'n':
                north = north +1;
            break;

            case 's':
                south = south +1;
            break; 

            case 'e':
                east = east +1;
            break; 

            case 'w':
            west = west +1;
            break;


        }
    }
    
    if((north === south) && (east === west))
        return true;
    else

    return false;


}
