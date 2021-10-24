
function Circle(radius){
    this.radius = radius;
    this.area = function(){
        return (this.radius * this.radius * Math.PI);
    }
}



function Shape(){

}

Shape.prototype.draw = function() {
       console.log('Draw');}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.Constructor = Circle;

console.log('Done');

const c1 = new Circle(3);
const s1 = new Shape();