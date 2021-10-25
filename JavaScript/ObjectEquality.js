function CreateAddress(street,city,zipcode){
    this.street = street;
    this.city =city;
    this.zipcode = zipcode;
}

const address1 = new CreateAddress('geisinger Strase','bangalore',98765);

const address2 = new CreateAddress('geisinger Strase','bangalore',98765);

const address3 = address1;

function areEqual(address1,address2){

    return address1.street === address2.street &&
           address1.city === address2.city &&
           address1.zipcode === address2.zipcode

}

function areSame(address1,address2){

    return address1 === address2;
}

console.log(areEqual(address1,address3));
console.log(areSame(address1,address3));