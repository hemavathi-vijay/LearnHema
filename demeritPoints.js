console.log('Welcome');
demeritPoints('ij');

function demeritPoints(num){

    const speedLimit = 70;
    const kmPerPoints = 5;

    if (num <= speedLimit) {

        console.log('Ok.');
    }

    else {
    
        const points = Math.floor ((num - speedLimit)/ kmPerPoints);
        
        if(points >=12)

        console.log('License Suspended...');

        else

        console.log('Points : ',points);
    }

    if(typeof num != 'number')

    console.log('Not a Number');
    return NaN;
}