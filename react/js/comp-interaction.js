let  APP = {};

class Holder extends React.Component{
    constructor(){
        super();
        this.state = {count: 0};
    }

    componentDidMount(){
        $(APP).on('up', function(e){
            var count = this.state.count + 1;
            this.setState({count: count});
        }.bind(this));

        $(APP).on('down', function(e){
            var count = (this.state.count - 1);
            this.setState({count: count});
        }.bind(this));
    }
    componentWillUnmount () {
        $(APP).off('up');
        $(APP).off('down');
    }
    render() {
        let count = this.state.count;
        return <h4>Current Count: {count}</h4>;
    }
}

class Counter extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    decrement() {
        $(APP).trigger('down');
    }
    increment() {
        $(APP).trigger('up');
    }
    render(){
        return (<div>
            <button onClick={this.increment} >Increment</button>  <br/>  <br/>
            <button onClick={this.decrement} >Decrement</button>
        </div>)
    }
}

ReactDOM.render(<Counter/>, document.getElementById('content'));
ReactDOM.render(<Holder/>, document.getElementById('content2'));