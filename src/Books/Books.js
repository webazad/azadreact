import React, { Component } from 'react';

import Book from './Book';
import './Books.css';

class Books extends Component {
    //constructor(props) {
        //super(props);
        //this.state = {  }
    //}
    render() { 
        return ( 
            <ul className="Books">
                 {this.props.books.map(book=>{ 
                     return (
                        <Book id={book.id} name={book.name} price={book.price}/>
                     )
                 })}                
            </ul>
        );
    }
}
 
export default Books;