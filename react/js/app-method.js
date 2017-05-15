let MyVar = React.createClass({

    render: function() {
        return (
            <div>View: Using JSX </div>
        );
    }
});

ReactDOM.render(<MyVar />, document.getElementById('content') );