/** @jsxImportSource @emotion/react */
import moment from "moment";
import { Color, Font } from "./css-vars";

// images
import y from "../img/Y.png";

const openLinkProps = { target: "_blank", rel: "noreferrer noopener" };

function NewsItem({ id, rank, title, url, by, score, time, descendants }) {
  const { origin, hostname } = url ? new URL(url) : {};

  const itemURL = `https://news.ycombinator.com/item?id=${id}`;
  const handleItemClick = () => {
    window.open(itemURL);
  };

  return (
    <div
      css={{
        display: "flex",
        justifyContent: "flex-start",
        padding: "0.5rem 1rem",
        margin: "0.5rem 0",
        borderRadius: "8px",
        ":hover": {
          backgroundColor: Color.dimBlue,
          "#hidden": {
            visibility: "visible",
          },
        },
      }}
    >
      <div
        css={{
          color: Color.white,
          fontSize: "1rem",
          fontFamily: Font.news,
          fontWeight: "bold",
          position: "relative",
          marginRight: "0.5rem",
          "::after": {
            content: `""`,
            position: "absolute",
            width: "1px",
            height: "30px",
            backgroundColor: Color.blueLite,
            marginLeft: "0.5rem",
          },
        }}
      >
        {rank}
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "0 1rem",
          width: "100%",
        }}
      >
        <a
          href={url || itemURL}
          {...openLinkProps}
          css={{
            textDecoration: "none",
            color: Color.white,
            fontFamily: Font.news,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {title}
        </a>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: Font.news,
            fontWeight: 400,
            color: Color.white,
          }}
        >
          <div css={{ display: "flex", alignItems: "flex-end" }}>
            {url && (
              <small css={{ color: Color.lightBlue, marginRight: "1rem" }}>
                <a
                  href={origin}
                  {...openLinkProps}
                  css={{ textDecoration: "none", color: Color.lightBlue }}
                >
                  {hostname}
                </a>
              </small>
            )}
            <small id="hidden" css={{ visibility: "hidden" }}>
              <p>
                {`by `}
                <a
                  href={`https://news.ycombinator.com/user?id=${by}`}
                  {...openLinkProps}
                  css={{ textDecoration: "none", color: Color.lightBlue }}
                >
                  {by}
                </a>
              </p>
            </small>
          </div>

          <div
            id="hidden"
            css={{
              visibility: "hidden",
              display: "flex",
              alignItems: "flex-end",
              gap: "1rem",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleItemClick();
            }}
          >
            <small css={{ color: Color.yellow }}>
              <p>{moment.unix(time).fromNow()}</p>
            </small>
            <small css={{ color: Color.pointsColor }}>
              <p>{score} points</p>
            </small>
            <small css={{ color: Color.commentsColor }}>
              <p>{descendants} comments</p>
            </small>
            <a
              href={itemURL}
              {...openLinkProps}
              css={{ textDecoration: "none", height: "15px" }}
            >
              <img
                src={y}
                alt="y combinator"
                css={{
                  width: "15px",
                  cursor: "pointer",
                  ":hover": { opacity: 0.8 },
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
