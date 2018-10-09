import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Footer from './Footer/Footer';

import './App.css';
import './Header/Header.css';
import './Nav/Nav.css';
import './Main/Main.css';
import './Footer/Footer.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Route exact path="/" component={Main} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Portfolio" component={Portfolio} />
                <Footer />
            </div>
        </Router>
    );
  }
}

export default App;
