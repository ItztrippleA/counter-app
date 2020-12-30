import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 
    
    render() { 
        const { onReset, onIncreament,onDelete, counters}= this.props;
        return ( 
        
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => 
                (
                <Counter key={counter.id } onIncreament={onIncreament} onDelete = {onDelete} counter = {counter}/>))}
        </div> );
    }
}
 
export default Counters;