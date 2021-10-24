
const numbers = [1,2,3,4,5,6,7,8,9];

move(numbers,0,-2);

console.log('New Array :',numbers);

function move(array,index,offset){

    const output = array;

    if(index <= (output.length-1)){

        //console.log('output length :',output.length-1);
        const newIndex = index + offset;

        if((newIndex <= (output.length))&&(newIndex >=0)){
            const indexNumber = output[index];

            console.log('indexNumber :',indexNumber);
            output.splice(index,1);
            console.log('newIndex',newIndex);
            output.splice(newIndex,0,indexNumber);
        }

        else
        console.error('Invalid Index');

    }
    else
    console.error('Invalid Index');
}


