import React, { Component } from 'react';


const NavBar = (props)=>{
    return (  
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                 <span className="badge badge-pill badge-secondary ">
                     {props.totalCounters}
                     </span>    
            </div>
        </nav>
    );

}; 
export default NavBar;