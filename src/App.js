import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header/Header';
//import Books from './Books/Books';
import Main from './Main/Main';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import './App.css';

class App extends Component {
    state = {
        books:[
            {
                id: 1,
                name: 'Book 1',
                price: '10 taka',
            },
            {
                id: 2,
                name: 'Book 2',
                price: '20 taka',
            },
            {
                id: 3,
                name: 'Book 3',
                price: '30 taka',
            },
            {
                id: 4,
                name: 'Book 4',
                price: '40 taka',
            }
        ]
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Header /> 
                    {/* <Books books={this.state.books} /> */}
                    <Route exact path="/" component={Main} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Services" component={Services} />
                    <Route exact path="/Portfolio" component={Portfolio} />
                    <Route exact path="/Contact" component={Contact} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;