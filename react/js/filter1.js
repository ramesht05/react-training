class MyList extends React.Component{

    constructor(props){
        super(props);
    }


    render() {
         let _data = this.props.info;
    
        return(
            <div>
                <ul>
                    {_data.map(function(object, i){
                        return <li key={i}>{object}</li>;
                    })}
                </ul>
            </div>
            );
    }
}

class FilterComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : props.info
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        
        this.setState({data: this.props.info.filter((value)=>{return value.indexOf(event.target.value) >= 0;})});
    }


    render() {
        return (
            <div>
            <input type="text" onChange={this.handleChange}/>
            <MyList info={this.state.data} />
            </div>
        );
    }
}

ReactDOM.render(
    <FilterComponent info={data} />,
    document.getElementById('content')
);let data =[
                      "Apples",
                      "Bread",
                      "Vada",
                      "Oats",
                      "Oranges",
                      "Grapes",
                      "Banana"
                  ];



class MyList extends React.Component{

    constructor(props){
        super(props);
    }


    render() {
         let _data = this.props.info;
    
        return(
            <div>
                <ul>
                    {_data.map(function(object, i){
                        return <li key={i}>{object}</li>;
                    })}
                </ul>
            </div>
            );
    }
}

class FilterComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : props.info
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        
        this.setState({data: this.props.info.filter((value)=>{return value.indexOf(event.target.value) >= 0;})});
    }


    render() {
        return (
            <div>
            <input type="text" onChange={this.handleChange}/>
            <MyList info={this.state.data} />
            </div>
        );
    }
}

ReactDOM.render(
    <FilterComponent info={data} />,
    document.getElementById('content')
);