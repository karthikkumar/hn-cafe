/** @jsxImportSource @emotion/react */
import { Color, Font } from "../utils/css-vars";
import Modal from "./Modal";
import { getItemURL } from "../utils";
import { OpenLinkProps } from "../constants";

const NewsInfoModal = ({
  isOpen,
  onClose,
  id,
  title,
  url,
  hostname,
  by,
  score,
  timeAgo,
  descendants,
  isRead,
  onURLClick,
  onItemClick,
}) => {
  if (!isOpen) {
    return null;
  }

  const itemURL = getItemURL(id);

  return (
    <Modal onClose={onClose}>
      <div
        css={{
          backgroundColor: Color.darkBlue,
          width: "90%",
          borderRadius: "10px",
          padding: "1.5rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={url || itemURL}
          {...OpenLinkProps}
          css={{
            textDecoration: "none",
            color: isRead ? Color.gray : Color.white,
            fontFamily: Font.news,
            fontSize: "1.2rem",
            fontWeight: 500,
            cursor: "pointer",
            width: "100%",
            borderBottom: `1.5px solid ${Color.transparent}`,
            ":hover": {
              borderBottom: `1.5px solid ${Color.white}`,
            },
          }}
          onClick={onURLClick}
        >
          {title}
        </a>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "1rem",
            marginTop: "1rem",
            fontFamily: Font.news,
            fontWeight: 400,
            color: Color.white,
          }}
        >
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
              }}
            >
              {hostname}
            </a>
          </small>
          <small>
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
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              cursor: "pointer",
              width: "100%",
              "#time": {
                borderBottom: `1px solid ${Color.yellow}`,
              },
              "#points": {
                borderBottom: `1px solid ${Color.pointsColor}`,
              },
              "#comments": {
                borderBottom: `1px solid ${Color.commentsColor}`,
              },
            }}
            onClick={onItemClick}
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
          </div>
          <div
            css={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <button
              onClick={onURLClick}
              css={{
                backgroundColor: Color.transparent,
                border: 0,
                fontFamily: Font.logo,
                fontSize: "1rem",
                color: Color.yellow,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <span
                css={{
                  borderBottom: `2px solid ${Color.transparent}`,
                  ":hover": {
                    borderBottom: `2px solid ${Color.orange}`,
                  },
                }}
              >
                OPEN URL
              </span>
            </button>
            <button
              onClick={onClose}
              css={{
                backgroundColor: Color.transparent,
                border: 0,
                fontFamily: Font.logo,
                fontSize: "1rem",
                color: Color.yellow,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <span
                css={{
                  borderBottom: `2px solid ${Color.transparent}`,
                  ":hover": {
                    borderBottom: `2px solid ${Color.orange}`,
                  },
                }}
              >
                CLOSE
              </span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewsInfoModal;
