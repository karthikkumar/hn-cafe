import y from "../img/Y.png";

const openLinkProps = { target: "_blank", rel: "noreferrer noopener" };

function NewsItem({ id, rank, title, url, by, score, descendants }) {
  const { origin, hostname } = url ? new URL(url) : {};

  const itemURL = `https://news.ycombinator.com/item?id=${id}`;
  const handleItemClick = () => {
    window.open(itemURL);
  };

  return (
    <div className="item">
      <div className="rank">{rank}</div>
      <div className="news">
        <a href={url || itemURL} {...openLinkProps}>
          {title}
        </a>
        <div className="news-info">
          <div className="news-info-left">
            {url && (
              <small className="site">
                <a href={origin} {...openLinkProps}>
                  {hostname}
                </a>
              </small>
            )}
            <small className="author">
              <p>
                {`by `}
                <a
                  href={`https://news.ycombinator.com/user?id=${by}`}
                  {...openLinkProps}
                >
                  {by}
                </a>
              </p>
            </small>
          </div>

          <div
            className="news-info-right"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleItemClick();
            }}
          >
            <small className="time">
              <p>5 hours ago</p>
            </small>
            <small className="points">
              <p>{score} points</p>
            </small>
            <small className="comments">
              <p>{descendants} comments</p>
            </small>
            <a href={itemURL} {...openLinkProps}>
              <img src={y} alt="y combinator" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
