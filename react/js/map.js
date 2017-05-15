let data = [
             {name:'Ram', age:28, city:'BLR'},
             {name:'John', age:22, city:'DEL'},
             {name:'Raj', age:21, city:'HYD'}
           ];

class App  extends React.Component {
    render() {
        let _data = this.props.info;
     //   console.log("_data: ",  _data);
        return(
            <div>
                {_data.map(function(object, i){
                    return <div className={"row"} key={i}>
                        {[ object.name ,
                            <b className="city" key={i}> {object.city} </b> , // removal of  key --> warning
                            object.age
                        ]}
                    </div>;
                })}
            </div>
        );
    }
};

ReactDOM.render(<App info={data} />, document.getElementById('content'));