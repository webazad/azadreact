/* 
 * and open the template in the editor.
 */
import React, {Component} from "react";

import logo from '../Header/logo.png';

class Footer extends Component{
    render(){
        return(
            <footer className="the_footer">
                <div className="footer_top">
                    <div className="">
                        <div className="container">
                            <div className="col logo">
                                <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                            </div>
                            <div className="col">
                                <h3>Links</h3>
                                <ul>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Terms Of Services</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Designer</a></li>
                                    <li><a href="/">Developer</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Languages</h3>
                                <ul>
                                    <li><a href="/">HTML</a></li>
                                    <li><a href="/">CSS</a></li>
                                    <li><a href="/">JAVASCRIPT</a></li>
                                    <li><a href="/">PHP</a></li>
                                    <li><a href="/">REACTJS</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Socials</h3>
                                <ul>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Twitter</a></li>
                                    <li><a href="/">Linkedin</a></li>
                                    <li><a href="/">Instagram</a></li>
                                    <li><a href="/">Skype</a></li>
                                    <li><a href="/">Whatsapp</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright 2018, All rights Reserved By Azad</p>
                </div>
            </footer>                
        );
    }
}
export default Footer;


