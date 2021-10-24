


function Circle(radius){

    let location = 7;
    let color = 'red';
    this.radius = radius,
    this.area = function() {return (Math.PI * radius * radius);},
    this.draw = function(){ console.log('Draw location -',location)},

 
    Object.defineProperty (this,'getLocation', {
        get: function(){
            return location;
    },
    set : function(value){
        if(!value )
        throw new Error('Invalid Location.');
        location = value;

    }
    
});

Object.defineProperty(this,'getcolor',{
    get:  function(){
        return color;
    }
});

}


const newCircle = new Circle(5);
newCircle.getLocation = 8;
newCircle.draw();
console.log( newCircle.radius, newCircle.area(),newCircle.getLocation,newCircle.getcolor);
