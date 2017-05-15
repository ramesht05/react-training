class Filter extends React.Component{
	constructor(props){
        super(props);
        this.state = { items: ["Apples",
                      "Bread",
                      "Vada",
                      "Oats",
                      "Oranges",
                      "Grapes",
                      "Banana"]
        };
        this.filterList = this.filterList.bind(this);
    }

    filterList(event) {
    	let items = this.state.items;
    	items = _.filter(items, function(item)
    			{return _.contains(item, event.target.value)}
    		);
        this.setState({items: items});
    }

    render() {
    	let value;
    	let items = this.state.items;
        return (
        	<div>
        		<div>
        			<input type="text" value={value} onChange={this.filterList} />
        		</div>
	            <div>
	                {items.map(function(item, i){
	                	return <div key={i}>
	                		<b>{item}</b>
	                	</div>;
	                })}
	            </div>
            </div>
        );
    }
}

ReactDOM.render(<Filter  name=" Filter"/>, document.getElementById('content') );