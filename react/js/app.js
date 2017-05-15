class MyDiv extends React.Component {
    render() {
        var mymsg = this.props.msg2;

        return (  // "return" should return a single node only.
            <div>
                <div>Using React</div>
                <div>Cool framework</div>
                <div>{this.props.msg}</div>
                <div> {"Also: " + mymsg}</div>
            </div>
        );
    }
};

ReactDOM.render(<MyDiv msg = "from FB" msg2 = " used by Instagram"/>,
                  document.getElementById("content")) ;