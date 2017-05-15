
class MyDiv1 extends React.Component {

        constructor(props) {
            super(props);
            console.log("constr -- prop: ",   this.props.name) ;
        }

        componentWillMount() {
          console.log("componentWillMount") ;

        }

         render() {
             console.log("render") ;
             return <div>JS: {this.props.name}</div>;
         }

        componentDidMount() {
            console.log("componentDidMount") ;
            console.log("prop: ",   this.props.name) ;
        }

         componentWillUnmount() {
             console.log("componentWillUnmount") ;
             console.log("prop: ",   this.props.name) ;
         }

    }

ReactDOM.render(<MyDiv1  name=" the best"/>, document.getElementById('content') );