/* 
 * and open the template in the editor.
 */
import React, {Component} from "react";
import art from './art.png';
import people from './people.png';
import fable from './fable.png';
import fit from './fit.png';
import boot from './boot.png';
import blush from './blush.png';
import swift from './swift.png';
import sister from './sister.png';
import social from './social.png';
import fantasy from './fantasy.png';
import city from './city.png';
import austin from './austin.png';
import marah from './marah.png';
import way from './way.png';
import arans from './arans.png';
import jcurve from './j-curve.png';
import tinker from './tinker.png';

class Portfolio extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div className="">
                <section style={{ 'background':"#ffffff",'padding':"20px 0px",'width':"80%",'margin':"0 auto" }}>
                    <h2>Portfolio Section</h2> 
                    <p>An experienced team on developing, testing, managing and marketing eCommerce stores. Complete consultancy and support to make sure your store sells and you get maximum return on your investment.</p>
                </section>
                <section className="demo" style={{ 'background' : "#e3e3e3",'padding' : "20px 0px" }}>
                    <h2>Demo sites ...</h2>                    
                    <ol className="">
                        <li><a href="https://www.templatemonster.com/demo/54875.html" target="Demo 1" title="Demo 1" ><img src={art} className="" alt="logo" /></a></li>
                        <li><a href="http://preview.themeforest.net/item/little-people-kindergarten-wordpress-theme-for-prescool-and-infants-nurseries-and-play-school/full_screen_preview/11494908?ref=athemez&clickthrough_id=1389647478&redirect_back=true" target="Demo 2" title="Demo 2" ><img src={people} className="" alt="logo" /></a></li>
                        <li><a href="http://preview.themeforest.net/item/fable-children-kindergarten-wordpress-theme/full_screen_preview/9294431?ref=athemez&clickthrough_id&redirect_back=true" target="Demo 3" title="Demo 3" ><img src={fable} className="" alt="logo" /></a></li>
                        <li><a href="https://webthemez.com/preview/?fit-club-gym-fitness-free-website-template" target="Demo 4" title="Demo 4" ><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="http://preview.themeforest.net/item/arans-kindergarten-school-html-template/full_screen_preview/22585282?_ga=2.97788191.1685481296.1540993583-1977898323.1540993583&_gac=1.248785525.1540993850.CjwKCAjwpeXeBRA6EiwAyoJPKsUcYsYHYVa1Kdmkv4MSrjyXG4EC-pzjBCykd-B3rZqyzw1tlILY2xoCee0QAvD_BwE" target="Demo 5" title="Demo 5" ><img src={fit} className="" alt="logo" /></a></li>
                        <li><a href="https://blackrockdigital.github.io/startbootstrap-creative/" target="Demo 6" title="Demo 6" ><img src={boot} className="" alt="logo" /></a></li>
                        <li><a href="https://webthemez.com/preview/?blush-beauty-salon-responsive-website-template-free-download" target="Demo 7" title="Demo 7" ><img src={blush} className="" alt="logo" /></a></li>
                        <li><a href="https://webthemez.com/preview/?swift-car-wash-html-website-template" target="Demo 8" title="Demo 8" ><img src={swift} className="" alt="logo" /></a></li>
                    </ol>
                </section>
                <section className="portfolio" style={{ 'background' : "#ffffff",'padding' : "20px 0px" }}>
                    <h2>Completed sites ...</h2>
                    <ol>
                        <li><a href="http://www.jcurvemedia.com.au/" rel="noopener noreferrer" target="_blank" title="J-Curve Media"><img src={jcurve} className="" alt="logo" /></a></li>
                        <li><a href="https://tinkerbellhomecleaning.com/" rel="noopener noreferrer" target="_blank" title="Tinker Bell Home Cleaning"><img src={tinker} className="" alt="logo" /></a></li>
                        <li><a href="http://www.permanentbeautytherapy.com/" rel="noopener noreferrer" target="_blank" title="Permanent Beauty Therapy"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="http://celluloidsisters.com/" rel="noopener noreferrer" target="_blank" title="Celluloid Sisters"><img src={sister} className="" alt="logo" /></a></li>
                        <li><a href="http://exchangeed.com/" rel="noopener noreferrer" target="_blank" title="Exchangeed"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="http://social.exchangeed.com/" rel="noopener noreferrer" target="_blank" title="social.exchangeed"><img src={social} className="" alt="logo" /></a></li>
                        <li><a href="https://fantasyhall.net/" rel="noopener noreferrer" target="_blank" title="Fantasy Hall"><img src={fantasy} className="" alt="logo" /></a></li>
                        <li><a href="https://fantasyhall.com/" rel="noopener noreferrer" target="_blank" title="Fantasy Hall"><img src={fantasy} className="" alt="logo" /></a></li>
                        <li><a href="http://www.capcitykitchen.com/" rel="noopener noreferrer" target="_blank" title="Fantasy Hall"><img src={city} className="" alt="logo" /></a></li>
                        <li><a href="https://austin4u.com/" rel="noopener noreferrer" target="_blank" title="Austin"><img src={austin} className="" alt="logo" /></a></li>
                        <li><a href="https://marahalleab-nursery.com" target="_blank" rel="noopener noreferrer" title="Al Marah Al Leab Nursery"><img src={marah} className="" alt="logo" /></a></li>
                        <li><a href="http://www.shannonfms.ie" target="_blank" rel="noopener noreferrer" title="Shannon Management Services"><img src={way} className="" alt="logo" /></a></li>
                        <li><a href="https://haleswindowcleaning.com/" target="_blank" rel="noopener noreferrer" title="Hale's Window Cleaning Nashville TN"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="http://padmawears.com/" target="_blank" rel="noopener noreferrer" title="Padma Wears Limited - An Export Oriented Apparels Manufacturer"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="https://glastonburywoods.com/" target="_blank" rel="noopener noreferrer" title="Glastonbury Woods Apartments Nashville TN Best Affordable Great Location"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="https://gitesforsale.eu/" target="_blank" rel="noopener noreferrer" title="gitesforsalefrance"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="https://company.connect.ae/" target="_blank" rel="noopener noreferrer" title="AL MARAH & AL LEAB NURSERY"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="https://www.bluebellsnursery.com" target="_blank" rel="noopener noreferrer" title="Bluebells Nursery School"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="https://bellemeadejewelry.com/" target="_blank" rel="noopener noreferrer" title="Belle Meade Jewelry & Repair"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="https://deckmasterstn.com/" target="_blank" rel="noopener noreferrer" title="DECK MASTERS"><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="https://lascustompowerandlighting.com/" rel="noopener noreferrer" target="_blank" title="LA’s Custom Power and Lighting Co."><img src={arans} className="" alt="logo" /></a></li>
                        <li><a href="https://tinasdelights.biz/" target="_blank" rel="noopener noreferrer" title="Tina's Delights Homemade Pies"><img src={arans} className="" alt="logo" /></a></li>                    
                    </ol>
                </section>
            </div>                
        );
    }
}
export default Portfolio;


