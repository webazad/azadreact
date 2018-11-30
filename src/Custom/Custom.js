class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: "Hi there.."
         }
    }
    render() { 
        return ( 
            <span className="">{this.state.id}</span>
         );
    }
}
 
export default Person;

{/*
            ///<Router>
                <div className="App">
                    <Header />
                    <Books books={this.state.books} />
                    <Route exact path="/" component={Main} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Services" component={Services} />
                    <Route exact path="/Portfolio" component={Portfolio} />
                    <Route exact path="/Contact" component={Contact} />
                    <Footer />
                </div>
            //</Router> 
        */}