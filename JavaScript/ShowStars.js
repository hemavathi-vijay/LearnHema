const num =2;
showStars(num);
function showStars(num){

    for(let x =1; x <=num ; x++){

        let pattern ='';
     for(let y =1; y<=x;y++){
     pattern += '*';
     }
     console.log(pattern);
    }
}