
// just my first JS
console.log('Hello world');

const name = 'learn';

console.log(name);

let person ={
    name : 'Hema',
    age :34
};

console.log(person.age);


let selectColors = ['red', 'Blue','green'];
console.log(selectColors[1]);
console.log('no:of elements in Arraw selectColors :',selectColors.length);

function greet(name){
    console.log('Hello ',name);
}

greet('Hema');

function square(number){
    return number * number;
}

console.log('Square fucntion :',square(6));


let customerPoints = 90;

let typle = customerPoints > 100 ? 'Gold' : 'Silver';

console.log(typle);

let hour =66;

if(hour >= 6 && hour < 12){
    
    console.log('Good Morning!');

} else if(hour >= 12 && hour < 16 ){

    console.log('Good Afternoon !');
}else if(hour >=16 && hour < 20){

    console.log('Good Evening! ');

}else if(hour >= 20 && hour <= 24){

    console.log('Good Night! ');

}else {

    console.log('Wrong Hour Sorry!');
}



