import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//import Header from './Header/Header';
//import Books from './Books/Books';
//import Main from './Main/Main';
//import Portfolio from './Portfolio/Portfolio';
//import About from './About/About';
//import Services from './Services/Services';
//import Contact from './Contact/Contact';
//import Footer from './Footer/Footer';

import './App.css';

firebase.initializeApp({
    apiKey: 'AIzaSyDBYhQFN5vLzRPzd_TVeRCZ9--sKN65lao',
    authDomain: 'fir-azad.firebaseapp.com'
});

class App extends Component {
    /*state = {

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
    }*/
    state = {isSignedIn:false};
    uiConfig = {
        signInFlow:'popup',
        signInOptions:[
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks:{
            singInSuccess:()=>false
        }
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user});
        });
    }
    render() {
        return (
        
                <div>
                    {this.state.isSignedIn ? (
                    <div>Not Signed In!</div>
                    ):(
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                    )}
                </div>
        );
    }
}

export default App;