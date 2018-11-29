/* 
 * and open the template in the editor.
 */
import React, {Component} from "react";
import './Main.css';
import * as firebase from 'firebase';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            speed: 12,
            content: 'Wait a bit...'
        };
    }
    componentDidMount(){
        const rootRef = firebase.database().ref().child('react');
        const speedRef = rootRef.child('speed');
        const contentRef = rootRef.child('content');
        speedRef.on('value', snap => {
            this.setState({
                speed: snap.val()
            });
        });        
        contentRef.on('value', snap => {
            this.setState({
                content: snap.val()
            });
        });        
    }
    render(props){
        setTimeout(()=>{
            this.setState({'name':'Do'})
        },3000);
        return(
            <section className="main_section">
                <div className="main_upper">
                    <div className="upper_box">
                        <h2>What We Are {this.state.name}</h2> 
                        <p>{this.state.content} We believe in adaptive planning, evolutionary development and timely delivery through collaboration. {this.state.speed}</p>
                    </div>    
                </div>
                <div className="main_lower">
                    <div className="box">
                        <div className="colm_3">
                            <i className="fa fa-css3"></i>
                            <h3>Web Design</h3> 
                            <p>Designing a website is our passion and we try our best to make our clients website unic and lucrative out there.</p>
                        </div>
                        <div className="colm_3">
                            <i className="fa fa-html5"></i>
                            <h3>Web Developement</h3> 
                            <p>We add all the latest themes and plugins to support the latest updated features int he backend services right...</p>
                        </div>
                        <div className="colm_3">
                            <i className="fa fa-chevron-right"></i>
                            <h3>Apps Development</h3>
                            <p>Apps are fasion in the mobile technology. We always support a smooth technology to keep the technology great.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="colm_3">
                            <i className="fa fa-css3"></i>
                            <h3>SEO Service</h3> 
                            <p>Designing a website is our passion and we try our best to make our clients website unic and lucrative out there.</p>
                        </div>
                        <div className="colm_3">
                            <i className="fa fa-html5"></i>
                            <h3>CRM Services</h3> 
                            <p>We add all the latest themes and plugins to support the latest updated features int he backend services right...</p>
                        </div>
                        <div className="colm_3">
                            <i className="fa fa-chevron-right"></i>
                            <h3>Online Marketing</h3>
                            <p>Apps are fasion in the mobile technology. We always support a smooth technology to keep the technology great.</p>
                        </div>
                    </div>
                </div>
            </section>                
        );
    }
}
export default Main;


