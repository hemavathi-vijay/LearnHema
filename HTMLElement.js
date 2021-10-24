
function HtmlElement(){
  this.click = function (){
      console.log('Click.');
  }
}

HtmlElement.prototype.focus = function (){
    console.log(' In Focus');
}

const s1 = new HtmlElement();

function HtmlSelectElement(...elements){

    this.elements = elements;

    this.addItem = function(item){
        this.elements.push(item);
        console.log(item,' is added to the Element.');
    };

    this.removeItem =  function(item){
    
                this.elements.splice(this.elements.indexOf(item),1);
                console.log(item,' is removed from the Element');
    }      
}

HtmlSelectElement.prototype =  new HtmlElement();
HtmlSelectElement.prototype.Constructor = HtmlSelectElement;
const s2 = new HtmlSelectElement(1,2,3,4,5);