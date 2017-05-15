 let  msg = {
     name: "ES6: ",
     message: "its cool"
 };

 class Anotherdiv extends React.Component{
 render() {
     return <div>Info:  {this.props.name} {this.props.message}</div>;
   }
 };

 ReactDOM.render(<Anotherdiv {...msg} />, document.getElementById('content2'));