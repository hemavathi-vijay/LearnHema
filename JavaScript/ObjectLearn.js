const _radius = Symbol();



class Circle {
    constructor(radius){
        //this.radius = radius;
        this[_radius] = radius;
    }

    draw(){
        console.log('Draw.');
    }
}


const c = new Circle(4);
console.log(c);
