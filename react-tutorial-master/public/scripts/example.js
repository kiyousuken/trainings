var data = [
  {author: "Pete Hunt", text:"This is one comment"},
  {author: "Jordan Walke", text:"This is *another* comment"},
  {author: "ひろおかきょうすけ", text:"朝の通勤がしんどいよ"}
];

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
    var commentNodes = this.props.data.map(function (comment){
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return(
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox01">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
