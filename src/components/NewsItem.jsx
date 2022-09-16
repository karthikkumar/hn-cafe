/** @jsxImportSource @emotion/react */
import moment from "moment";
import { Color, Font } from "../utils/css-vars";
import { LocalStorageKey, getLocalStorage, setLocalStorage } from "../utils";

// images
import Y from "../img/Y.png";

const openLinkProps = { target: "_blank", rel: "noreferrer noopener" };

function NewsItem({ id, rank, title, url, by, score, time, descendants }) {
  const { origin, hostname } = url ? new URL(url) : {};
  const itemURL = `https://news.ycombinator.com/item?id=${id}`;

  const handleItemClick = () => {
    window.open(itemURL);
  };

  const readList = getLocalStorage(LocalStorageKey.ReadList);
  const isRead = readList?.includes(id);

  return (
    <>
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
            color: isRead ? Color.gray : Color.white,
            fontSize: "1rem",
            fontFamily: Font.news,
            fontWeight: "bold",
            position: "relative",
            marginRight: "0.5rem",
            width: "1rem",
            textAlign: "right",
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
            gap: "0.2rem",
            padding: "0 1rem",
            width: "100%",
          }}
        >
          <a
            href={url || itemURL}
            {...openLinkProps}
            css={{
              textDecoration: "none",
              color: isRead ? Color.gray : Color.white,
              fontFamily: Font.news,
              fontWeight: 500,
              cursor: "pointer",
              width: "max-content",
              borderBottom: `1.5px solid ${Color.transparent}`,
              ":hover": {
                borderBottom: `1.5px solid ${Color.white}`,
              },
            }}
            onClick={() => {
              setLocalStorage(LocalStorageKey.ReadList, (list = []) =>
                Array.from(new Set([...list]).add(id))
              );
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
              <small css={{ color: Color.lightBlue, marginRight: "1rem" }}>
                <a
                  href={origin || itemURL}
                  {...openLinkProps}
                  css={{
                    textDecoration: "none",
                    color: Color.lightBlue,
                    width: "max-content",
                    borderBottom: `1px solid ${Color.transparent}`,
                    ":hover": {
                      borderBottom: `1px solid ${Color.lightBlue}`,
                    },
                  }}
                >
                  {hostname || "news.ycombinator.com"}
                </a>
              </small>
              <small id="hidden" css={{ visibility: "hidden" }}>
                <p>
                  {`by `}
                  <a
                    href={`https://news.ycombinator.com/user?id=${by}`}
                    {...openLinkProps}
                    css={{
                      textDecoration: "none",
                      color: Color.lightBlue,
                      width: "max-content",
                      borderBottom: `1px solid ${Color.transparent}`,
                      ":hover": {
                        borderBottom: `1px solid ${Color.lightBlue}`,
                      },
                    }}
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
                width: "max-content",
                "#time, #points, #comments, #y": {
                  borderBottom: `1px solid ${Color.transparent}`,
                },
                ":hover": {
                  "#time": {
                    borderBottom: `1px solid ${Color.yellow}`,
                  },
                  "#points": {
                    borderBottom: `1px solid ${Color.pointsColor}`,
                  },
                  "#comments": {
                    borderBottom: `1px solid ${Color.commentsColor}`,
                  },
                },
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleItemClick();
              }}
            >
              <small id="time" css={{ color: Color.yellow }}>
                <p>{moment.unix(time).fromNow()}</p>
              </small>
              <small id="points" css={{ color: Color.pointsColor }}>
                <p>{score} points</p>
              </small>
              <small id="comments" css={{ color: Color.commentsColor }}>
                <p>{descendants} comments</p>
              </small>
              <a
                href={itemURL}
                {...openLinkProps}
                css={{ textDecoration: "none", height: "15px" }}
              >
                <img
                  id="y"
                  src={Y}
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
    </>
  );
}

export default NewsItem;
