import React, { Component } from 'react';
class NavBar extends Component {
    
    render() { 
        return (  
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                     <span className="badge badge-pill badge-secondary ">{this.props.totalCounters}</span>    
                </div>
            </nav>
        );
    }
}
 
export default NavBar;