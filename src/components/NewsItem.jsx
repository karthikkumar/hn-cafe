/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import { Color, Font } from "../utils/css-vars";
import { useIntersection } from "../utils/hooks";
import Divider from "./Divider";
import { LocalStorageKey, getLocalStorage, setLocalStorage } from "../utils";
import { useStateContext } from "../state";

// images
import y from "../img/y.png";

const openLinkProps = { target: "_blank", rel: "noreferrer noopener" };

function NewsItem({
  id,
  rank,
  title,
  url,
  by,
  score,
  time,
  descendants,
  displayDate,
}) {
  const ref = useRef();
  const inViewport = useIntersection(ref, "-70px");
  const [isVisited, setIsVisited] = useState(false);
  const { showedLastVisitedOnce, setShowedLastVisitedOnce } = useStateContext();
  const lastVisited = getLocalStorage(LocalStorageKey.LastSessionLastVisited);
  const isLastVisited = id === lastVisited?.id && rank === lastVisited?.rank;

  useEffect(() => {
    let timer;
    if (inViewport && isLastVisited) {
      timer = setTimeout(() => setShowedLastVisitedOnce(true), 5000);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [inViewport, isLastVisited]);

  if (inViewport && !isVisited) {
    setLocalStorage(LocalStorageKey.CurrentSessionLastVisited, {
      id,
      rank,
      time,
      displayDate,
    });
    setIsVisited(true);
  }

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
        ref={ref}
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
              color: isRead ? Color.gray : Color.white,
              fontFamily: Font.news,
              fontWeight: 500,
              cursor: "pointer",
              width: "max-content",
              borderBottom: `2px solid ${Color.transparent}`,
              ":hover": {
                borderBottom: `2px solid ${Color.white}`,
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
              {url && (
                <small css={{ color: Color.lightBlue, marginRight: "1rem" }}>
                  <a
                    href={origin}
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
      {!showedLastVisitedOnce && isLastVisited && (
        <Divider message="LAST VISITED" />
      )}
    </>
  );
}

export default NewsItem;
