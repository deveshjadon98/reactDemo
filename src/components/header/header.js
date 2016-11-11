import React, { Component } from 'react';
import logo from './../../../assets/images/logo.jpg';
// import Link from 'react-Router';
import './header.css';

class Header extends Component {

    render() {
        return (
            <div className="App-header">
                <div id="header-container">
                    <img className="logo" role="presentation" src={logo} /> 
                    <ul>
                        <li><button>Create</button></li>
                        <li><button onClick={this.props.gridStateProp}>Grid</button></li>
                        <li><button onClick={this.props.listStateProp}>List</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;