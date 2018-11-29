/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import './About.css';

class About extends Component{
    render(){
        return(
            <section className="about">
                <div style={{ 'background':"#ffffff",'padding':"20px 0px",'width':"80%",'margin':"0 auto" }}>
                    <h2>About Me</h2>
                    <p>I am a WordPress design and coding expert. I have 5 years of WordPress practical experience. And have worked in hundreds of websites. My desire is to help in WordPress premium and custom themes and plugins customization and development.</p>              
                </div>
            </section>
        );
    }
}
export default About;


