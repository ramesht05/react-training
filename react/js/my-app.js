class Child extends React.Component {
    render() {
        return (
            <div>
                <h3>iOS</h3>
                <h3>{this.props.label}</h3>
            </div> 
        );
    };
};

class ShowLogin extends React.Component {
    render() {
        return (
            <div>
                Sign In
            </div> 
        );
    }
};

class Parent extends React.Component {
    render() {
        if (this.props.isUserLoggedIn == true) {
            return (
               <div>
                    <h3>{this.props.label}</h3>
                    <Child label="Windows"/>
                </div> ); 
        } else {
            return (
                <ShowLogin/> 
            );
        }          
            
    }
};

ReactDOM.render(<Parent label="Android" isUserLoggedIn="true"/>, document.getElementById('content3'));