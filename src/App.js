import NavBar from './components/navBar';
import Counters from "./components/counters";
import React, { Component } from 'react';
import './App.css';


class App extends Component() {

  state = {  
    counters: [
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
}

handleIncreament = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters};
    counters[index].value++;
    this.setState({counters});
}

handleReset = () =>{
    const counters = this.state.counters.map(c =>{
        c.value = 0;
        return c;
    });
    this.setState({ counters });
};


handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c=> c.id !== counterId);
    this.setState({counters});
};

render(){
  return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
        <main className="container">
          <Counters onReset={this.handleReset} onIncreament={this.handleIncreament} onDelete={this.handleDelete} counters={this.state.counters} />
        </main>
    </React.Fragment>
  );
  }
}

export default App;
