var Comment = React.createClass({
  render: function () {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm03">
        Helloworld! I am a CommentForm.
      </div>
    );
  }
});
var CommentList = React.createClass({
  render: function () {
    return (
      <div>
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});
var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox01">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
