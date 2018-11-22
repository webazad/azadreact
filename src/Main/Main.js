/* 
 * and open the template in the editor.
 */
import React, {Component} from "react";

class Main extends Component{
    constructor(){
        super();
        this.state = {'name':'Azad'};
    }
    render(){
        setTimeout(()=>{
            this.setState({'name':'Hey there...'})
        },3000);
        return(
            <section className="main_section">
                <div className="main_upper">
                    <div className="upper_box">
                        <h2>Special Features {this.state.name}</h2> 
                        <p>We believe in adaptive planning, evolutionary development and timely delivery through collaboration.</p>
                    </div>    
                </div>
                <div className="main_lower">
                    <div className="box">
                        <div className="colm_3">
                            <i className="fa fa-css3"></i>
                            <h3>Web Design</h3> 
                            <p>Section Main Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an.</p>
                        </div>
                        <div className="colm_3">
                            <i className="fa fa-html5"></i>
                            <h3>Web Developement</h3> 
                            <p>Section Main Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an.</p>
                        </div>
                        <div className="colm_3">
                            <i className="fa fa-chevron-right"></i>
                            <h3>Apps Development</h3>
                            <p>Section Main Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an.</p>
                        </div>
                    </div>
                </div>
            </section>                
        );
    }
}
export default Main;


