/* 
 * and open the template in the editor.
 */
import React, {Component} from "react";
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Clock from 'react-live-clock';


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
                                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Dhaka'} />
                            </div>
                            <div className="col links">
                                <h3>Links</h3>
                                <ul>
                                    <li><a href="/"><i className="fa fa-chevron-right"></i> Privacy Policy</a></li>
                                    <li><a href="/"><i className="fa fa-chevron-right"></i> Terms Of Services</a></li>
                                    <li><a href="/"><i className="fa fa-chevron-right"></i> Blog</a></li>
                                    <li><a href="/"><i className="fa fa-chevron-right"></i> Designer</a></li>
                                    <li><a href="/"><i className="fa fa-chevron-right"></i> Developer</a></li>
                                    
                                </ul>
                            </div>
                            <div className="col languages">
                                <h3>Languages</h3>
                                <ul>
                                    <li><a href="/"><i className="fa fa-html5"></i> HTML</a></li>
                                    <li><a href="/"><i className="fa fa-css3"></i> CSS</a></li>
                                    <li><a href="/"><i className="fa fa-chevron-right"></i> JAVASCRIPT</a></li>
                                    <li><a href="/"><i className="fa fa-chevron-right"></i> PHP</a></li>
                                    <li><a href="/"><i className="fa fa-chevron-right"></i> REACTJS</a></li>
                                </ul>
                            </div>
                            <div className="col socials">
                                <h3>Socials</h3>
                                <ul>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i> Facebook</a></li>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i> Instagram</a></li>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i> Twitter</a></li>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-pinterest"></i> Pinterest</a></li>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i> Linkedin</a></li>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-google-plus"></i> Google Plus</a></li>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-skype"></i> Skype</a></li>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-whatsapp"></i> Whatsapp</a></li>
                                    <li><a href="https://www.facebook.com/web.dev.azad" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i> Github</a></li>
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


