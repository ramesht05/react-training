/*
a) use of props & children.
b) adding a comment within JSX

 */

class MyComment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h4 className="commentAuthor">
          {this.props.author}
        </h4>
        <aside>
         {this.props.children}
          {/* jsx comment: this is the child property */}
        </aside>
      </div>
    );
  }
}


class MyCommentList extends React.Component {
  render() {
    return (
      <div className="commentList">
        <MyComment author="Ravi">This is msg 1 (i.e. child)</MyComment>
        <MyComment author="Ajay">This is msg 2  (i.e. another child)</MyComment>
      </div>
    );
  }
}


ReactDOM.render(<MyCommentList />, document.getElementById('content') );