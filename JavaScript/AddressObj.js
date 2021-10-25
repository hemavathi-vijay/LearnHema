/*
const address = {
    street : 'geisinger strasse',
    city : 'Augsburg',
    zipcode : 71634
}
showAddress(address);

function showAddress(address){

    for (show in address)
    console.log(show,' : ', address[show]);

}
*/
/*
function showAddress(street,city,zipcode){
    return {
        street,
        city,
        zipcode
    }
}

const circleFromFunc = showAddress('add','hgidg',7686);
console.log(circleFromFunc);
*/

function CreateAddress(street,city,zipcode){
    this.street = street,
    this.city = city,
    this.zipcode = zipcode
};

const newAddress = new CreateAddress('abc','xyz',653654);

function showAddress(address){

    for (show in address)
    console.log(show,' : ', address[show]);

}

showAddress(newAddress);