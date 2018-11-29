import React, { Component } from 'react';

class Book extends Component {
    //constructor(props) {
        //super(props);
        //this.state = {  }
    //} 
    render() { 
        return ( 
            <li>
                <span>{this.props.id}</span> <a href="/">{this.props.name}</a> <span>{this.props.price}</span>
            </li>
         );
    }
}
 
export default Book;