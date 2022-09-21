/** @jsxImportSource @emotion/react */
import { useState } from "react";
import moment from "moment";
import { Color, Font } from "../utils/css-vars";
import {
  LocalStorageKey,
  getLocalStorage,
  setLocalStorage,
  getItemURL,
} from "../utils";
import NewsInfoModal from "./NewsInfoModal";
import { OpenLinkProps } from "../constants";

// images
import Y from "../img/Y.png";

function NewsItem({ id, rank, title, url, by, score, time, descendants }) {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const { origin, hostname } = url
    ? new URL(url)
    : { hostname: "news.ycombinator.com" };
  const itemURL = getItemURL(id);

  const handleItemClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(itemURL);
  };

  const handleURLClick = (event) => {
    event.stopPropagation();
    setLocalStorage(LocalStorageKey.ReadList, (list = []) =>
      Array.from(new Set([...list]).add(id))
    );
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setIsInfoModalOpen(false);
  };

  const readList = getLocalStorage(LocalStorageKey.ReadList);
  const isRead = readList?.includes(id);
  const timeAgo = moment.unix(time).fromNow();

  return (
    <>
      <NewsInfoModal
        isOpen={isInfoModalOpen}
        onClose={handleClose}
        id={id}
        title={title}
        url={url}
        hostname={hostname}
        by={by}
        score={score}
        timeAgo={timeAgo}
        descendants={descendants}
        isRead={isRead}
        onURLClick={handleURLClick}
        onItemClick={handleItemClick}
      />
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

          "@media (max-width: 900px)": {
            cursor: "pointer",
            ":hover": {
              "#hidden": {
                visibility: "hidden",
              },
            },
          },
        }}
        onClick={(event) => {
          event.stopPropagation();
          setIsInfoModalOpen(true);
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
            {...OpenLinkProps}
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

              "@media (max-width: 900px)": {
                width: "100%",
                pointerEvents: "none",
                ":hover": {
                  borderBottom: `1.5px solid ${Color.transparent}`,
                },
              },
            }}
            onClick={handleURLClick}
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
                  {...OpenLinkProps}
                  css={{
                    textDecoration: "none",
                    color: Color.lightBlue,
                    width: "max-content",
                    borderBottom: `1px solid ${Color.transparent}`,
                    ":hover": {
                      borderBottom: `1px solid ${Color.lightBlue}`,
                    },

                    "@media (max-width: 900px)": {
                      pointerEvents: "none",
                      ":hover": {
                        borderBottom: `1px solid ${Color.transparent}`,
                      },
                    },
                  }}
                >
                  {hostname}
                </a>
              </small>
              <small
                id="hidden"
                css={{
                  visibility: "hidden",

                  "@media (max-width: 900px)": {
                    display: "none",
                  },
                }}
              >
                <p>
                  {`by `}
                  <a
                    href={`https://news.ycombinator.com/user?id=${by}`}
                    {...OpenLinkProps}
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

                "@media (max-width: 900px)": {
                  display: "none",
                },
              }}
              onClick={handleItemClick}
            >
              <small id="time" css={{ color: Color.yellow }}>
                <p>{timeAgo}</p>
              </small>
              <small id="points" css={{ color: Color.pointsColor }}>
                <p>{score} points</p>
              </small>
              <small id="comments" css={{ color: Color.commentsColor }}>
                <p>{descendants} comments</p>
              </small>
              <a
                href={itemURL}
                {...OpenLinkProps}
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
