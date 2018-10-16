/* 
 * and open the template in the editor.
 */
import React, {Component} from "react";

import logo from '../Header/logo.png';

class Footer extends Component{
    render(){
        return(
            <footer className="App-section">
                <div className="footer_top">
                    <div className="">
                        <div className="container">
                            <div className="col">
                                <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/portfolio">Portfolio</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/portfolio">Portfolio</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/portfolio">Portfolio</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>All rights Reserved by Azad</p>
                </div>
            </footer>                
        );
    }
}
export default Footer;


