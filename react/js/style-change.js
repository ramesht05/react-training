class StyleChange extends React.Component {

    constructor(props){
        super(props);
        this.state =  {value: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        var timer = setInterval(this.handleChange, 300);
    }

    handleChange() {
        // while(true) {
            let value = this.state.value;
            value = value + 0.1;
            if (value < 1) {
                this.setState({value: value});    
            } else {
                this.setState({value: 0});
                clearInterval(timer);
            }
        // }
        
    }

    render(){
        let value = this.state.value;
        return (
                <p style={{opacity:value}}>This line fades away ......... and comes back !!!!</p>
        );
    }
}

ReactDOM.render(<StyleChange/>, document.getElementById('content'));