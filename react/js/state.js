class GenericComponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { thing: props.things };
        console.log("constructor: " ,  this.props.things) ;
    }

    render () {
        console.log("render: " ,  this.props.things) ;
         return( <div> {this.props.things} </div>);
     }
}
GenericComponent2.defaultProps = { things: "biscuit" };

ReactDOM.render(<GenericComponent2 />, document.getElementById("content2"));
ReactDOM.render(<GenericComponent2 things="cadbury"/>, document.getElementById("content3"));