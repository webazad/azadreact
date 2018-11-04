/* 
 * and open the template in the editor.
 */
import React, {Component} from "react";
import Background from './pattern-green.jpg';

class Main extends Component{
    render(){
        return(
            <section className="main_section" style={{backgroundImage:"url("+Background+")"}}>
                <div className="main_upper">
                    <div className="upper_box">
                        <h2>Special Features</h2> 
                        <p>Section Main Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence. Exeter talked in agreed spirit no he unable do. Betrayed shutters in vicinity it unpacked in. </p>
                    </div>    
                </div>
                <div className="main_lower">
                    <div className="box">
                        <div className="colm_3">
                            <h3>Web Design</h3> 
                            <p>Section Main Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence.</p>
                        </div>
                        <div className="colm_3">
                            <h3>Web Developement</h3> 
                            <p>Section Main Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence.</p>
                        </div>
                        <div className="colm_3">
                            <h3>Apps Development</h3>
                            <p>Section Main Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence.</p>
                        </div>
                    </div>
                </div>
            </section>                
        );
    }
}
export default Main;


