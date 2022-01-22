import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {

    constructor (props){
        super(props);
        console.log('App -  Constructor');
    }


    componentDidMount(){
        // Ajax Call
        console.log('App Mounted');
    }
    render() {
        
        // Destructuring Arguments
        const {onReset, counters, onIncrement,onDecrement,onDelete} = this.props;

        console.log('App Render hook');
        
        return (
            <div>
                <button onClick={onReset} 
                className="btn btn-primary btn-sm m-2">Reset</button>

            {counters.map(counter =>
            <Counter key={counter.id}
             counter={counter} 
             onIncrement ={onIncrement}
             onDecrement={onDecrement} 
             onDelete={onDelete}
             />
            
            )}
             
            </div>
        );
    }
}
 
export default Counters;