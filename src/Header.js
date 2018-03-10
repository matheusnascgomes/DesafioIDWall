import React, { Component } from 'react';
import logo from './res/logo.png';

export default class Header extends Component {
    render(){
        return(
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h1 className="app-title">Desafio IDDOG</h1>
            </header>
        );
    }
} 

