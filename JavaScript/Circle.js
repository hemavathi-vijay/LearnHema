
const circle ={
    radius : 2,
    get area(){
        return this.radius * this.radius * Math.PI;
    } 
}

circle.radius = 5;

console.log(circle.area);