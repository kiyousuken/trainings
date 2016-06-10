var HelloWorld = React.createClass({
  render: function() {
    return (
      // classではなくclassNameでクラスを付与
      <h2 className="mainContents_title">TOPICS</h2>
      <section className="mainContents_topicsItem">
          <p className="mainContents_topicsItemDate">2016.6.1</p>
          <p className="mainContents_topicsItemText">
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
      </section>
      <section className="mainContents_topicsItem">
          <p className="mainContents_topicsItemDate">2016.6.1</p>
          <p className="mainContents_topicsItemText">
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
      </section>
      <section className="mainContents_topicsItem">
          <p className="mainContents_topicsItemDate">2016.6.1</p>
          <p className="mainContents_topicsItemText">
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
               テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>i
      </section>
    );
  }
});

// id='content'に<HelloWorld />を埋め込む（マウント）
React.render(
  <HelloWorld />,
  document.getElementById('content')
);