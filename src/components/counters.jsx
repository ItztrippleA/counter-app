import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 
    render() { 
        return ( 
        
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => 
                (
                <Counter key={counter.id } onIncreament={this.props.onIncreament} onDelete = {this.onDelete} counter = {counter}/>))}
        </div> );
    }
}
 
export default Counters;