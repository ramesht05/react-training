class UserName extends React.Component {
        render() {
            return <div>name:  {this.props.name}</div>;
        }
    };

class User extends React.Component {
        render() {
            return <div>
                     <h3>City: {this.props.user.city}</h3>
                         <UserName name={this.props.user.name} />
                    </div>;
        }
    };


    let  user = { name: 'Ram', city: 'Bangalore' };

    ReactDOM.render(<User user={user} />, document.getElementById('content'));