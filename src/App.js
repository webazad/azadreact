import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Footer from './Footer/Footer';
import './App.css';
import './Nav/Nav.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Nav />  
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
