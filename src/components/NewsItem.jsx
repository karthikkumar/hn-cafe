function NewsItem() {
  return (
    <div className="item">
      <div className="rank">1</div>
      <div className="news">
        <h3>
          Facebook adds 5 divs, 9 spans and 30 CSS classes to every post in the
          timeline
        </h3>
        <div className="news-info">
          <div className="news-info-left">
            <small className="site">
              <p>twitter.com</p>
            </small>
            <small className="author">
              <p>
                by<a href="#"> karthikkumar</a>
              </p>
            </small>
          </div>

          <div className="news-info-right">
            <small className="time">
              <p>5 hours ago</p>
            </small>
            <small className="points">
              <p>692 points</p>
            </small>
            <small className="comments">
              <p>53 comments</p>
            </small>
            {/* <img src="img/Y.png" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
