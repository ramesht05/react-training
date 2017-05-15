

// Child Component
class ListItem2 extends React.Component {
    render() {
        return (
            <li>
                {this.props.quantity}× {this.props.children}
            </li>
        );
    }
}

// Parent Component
class GroceryList2 extends React.Component {
     render() {   // can be made static, since only one instance created.
        return (
            <ul>
                <ListItem2 quantity="2">Breads</ListItem2>
                <ListItem2 quantity="16">Eggs</ListItem2>
                <ListItem2 quantity="12">Milk</ListItem2>
            </ul>
        );
    }
}


ReactDOM.render(<GroceryList2 />, document.getElementById('content2'));
