const _radius = new WeakMap();

export class Circle{
    constructor(radius){

        if(radius<=0)
        throw new Error('Invalid Radius value.');

        _radius.set(this,radius);
    }

    draw(){
        console.log('Circle with radius '+_radius.get(this));
    }
}

