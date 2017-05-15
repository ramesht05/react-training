class ListItem  extends React.Component {
    render() {
        let _data = this.props.data;
        return(
            <div>
                {_data.map(function(name, i){
                    return <div className={"row"} key={i}>
                            { name }
                           </div>;
                })}
            </div>
        );
    }
};

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state =  {
            items: [],
            filteredItems: []
        };
        this.handleChange = this.handleChange.bind(this);        
    }
    
    componentDidMount() {
      $.get(this.props.sourceUrl, (result) => {
            let items = JSON.parse(result);
            this.setState({
                    items: items.data,
                    filteredItems: items.data
                });
        });
    }

    handleChange(event) {
        let query = event.target.value;
        let filteredItems = this.state.items.filter(function(el) {
              return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
          })
        this.setState({filteredItems: filteredItems});
    };   

    render(){

        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <ListItem data={this.state.filteredItems} />
            </div>
        );
    }
}

ReactDOM.render(<Input sourceUrl="ajaxdata.json"/>, document.getElementById('content'));