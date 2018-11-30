import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBEm6r6Ad96898Co3DP_l86DOtY5oq5sIk",
    authDomain: "react-f18f6.firebaseapp.com"
    //databaseURL: "https://react-f18f6.firebaseio.com",
    //projectId: "react-f18f6",
    //storageBucket: "react-f18f6.appspot.com",
    //messagingSenderId: "194773750439"
  };
firebase.initializeApp(config);
*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
