/* 
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="About">About</Link></li>
                    <li><Link to="Portfolio">Services</Link></li>
                    <li><Link to="Portfolio">Portfolio</Link></li>
                    <li><Link to="Portfolio">Contact</Link></li>
                </ul>
            </nav> 
        );
    }
}

export default Nav;


