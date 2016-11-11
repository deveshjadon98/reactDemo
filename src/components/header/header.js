import React, { Component } from 'react';
import logo from './../../../assets/images/logo.jpg';
import './header.css';
import App from './../../App';


class Header extends Component {

    render() {
        return (
            <div className="App-header">
                <div id="header-container">
                    <img className="logo" role="presentation" src={logo} /> 
                    <ul>
                        <li><button>Create</button></li>
                        <li><button onPress={App.onGridPress}>Grid</button></li>
                        <li><button onPress={App.onListPress}>List</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;