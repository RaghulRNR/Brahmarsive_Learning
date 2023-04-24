import React, { Component } from 'react';
import './s1.scss'
import AboutUs from './about';
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='test'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link " aria-current="page" href="/">Home</a>
                            
                            <a className="nav-link" href="/index">index</a>
                            <a className="nav-link" href="/aboutus">AboutUs</a>
                            <a className="nav-link" href="/pricing">Pricing</a>
                            <a className="nav-link ">Disabled</a>
                        </div>
                        </div>
                    </div>
                    </nav>
            </div>
            
        );
    }
}
 
export default Navbar;