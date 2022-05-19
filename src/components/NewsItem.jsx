function NewsItem({ rank, title, by, score, descendants }) {
  return (
    <div className="item">
      <div className="rank">{rank}</div>
      <div className="news">
        <h3>{title}</h3>
        <div className="news-info">
          <div className="news-info-left">
            <small className="site">
              <p>twitter.com</p>
            </small>
            <small className="author">
              <p>
                by
                <a href={`https://news.ycombinator.com/user?id=${by}`}>{by}</a>
              </p>
            </small>
          </div>

          <div className="news-info-right">
            <small className="time">
              <p>5 hours ago</p>
            </small>
            <small className="points">
              <p>{score} points</p>
            </small>
            <small className="comments">
              <p>{descendants} comments</p>
            </small>
            {/* <img src="img/Y.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
