/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from "react";

import Nav from '../Nav/Nav';
import './Header.css';

import logo from './logo.png';

class Header extends Component{
    render(){
        return(
            <header className="App-header">
                <div className="header_container">
                    <div className="logo">
                        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                    </div>
                    <Nav />  
                </div>
            </header>
        );
    }
}
export default Header;


