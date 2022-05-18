function NewsList() {
  return (
    <main id="news-list">
      <div className="date-group">
        <div className="date-header">
          <p>Today, 16 February</p>
        </div>
        <div className="item">
          <div className="rank">1</div>
          <div className="news">
            <h3>
              Facebook adds 5 divs, 9 spans and 30 CSS classes to every post in
              the timeline
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

        <div className="item">
          <div className="rank">2</div>
          <div className="news">
            <h3>
              Spotify will now suspend or terminate accounts it finds are using
              ad blockers
            </h3>
            <div className="news-info">
              <div className="news-info-left">
                <small className="site">
                  <p>kekranmakran.co</p>
                </small>
                <small className="author">
                  <p>
                    by<a href="#"> laddu_boy</a>
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

        <div className="divider">
          <span className="line"></span>
          <small>LAST VISTED</small>
          <span className="line"> </span>
        </div>
        <div className="divider offline">
          <span className="line"></span>
          <small>OFFLINE</small>
          <span className="line"> </span>
        </div>
      </div>
    </main>
  );
}

export default NewsList;
