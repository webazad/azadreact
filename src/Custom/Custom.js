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