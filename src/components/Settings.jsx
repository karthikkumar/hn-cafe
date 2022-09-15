/** @jsxImportSource @emotion/react */
import { Color, Font } from "../utils/css-vars";
import { useQueryClient } from "react-query";
import { useStateContext } from "../state";

// images
import mug from "../img/mug.png";

const Settings = ({ isOpen, onClose }) => {
  const queryClient = useQueryClient();
  const { setRefreshKey } = useStateContext();

  if (!isOpen) {
    return null;
  }

  return (
    <div css={{ position: "fixed", zIndex: 50 }}>
      <div
        css={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: Color.blueLite,
        }}
      />
      <div
        style={{
          display: "flex",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <div
          style={{
            backgroundColor: Color.darkBlue,
            width: "960px",
            height: "385px",
            borderRadius: "10px",
            padding: "2rem 3rem",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "4fr 1fr",
            }}
          >
            <div>
              <div>
                <div css={{ display: "flex", gap: "1rem" }}>
                  <h1
                    css={{
                      lineHeight: "1.8rem",
                      fontSize: "1.8rem",
                      fontFamily: Font.logo,
                      fontWeight: "bold",
                      color: Color.yellow,
                      paddingTop: "2px",
                    }}
                  >
                    COFFEE <br />
                    NEWS
                  </h1>
                  <div>
                    <img src={mug} alt="coffee mug icon" width={36} />
                    <div
                      css={{
                        height: "3px",
                        width: "36px",
                        backgroundColor: Color.orange,
                      }}
                    ></div>
                  </div>
                </div>
                {/* <div
                  css={{
                    fontFamily: Font.logo,
                    lineHeight: "1rem",
                    marginBottom: "1rem",
                    padding: "0.5rem 0",
                  }}
                >
                  <small css={{ color: Color.white, fontSize: "0.8rem" }}>
                    coffee beans from,
                  </small>
                  <br />
                  <a
                    href="https://news.ycombinator.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    css={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <strong
                      css={{
                        color: Color.lightBlue,
                        fontWeight: 600,
                        fontSize: "1rem",
                        borderBottom: `2px solid ${Color.transparent}`,
                        ":hover": {
                          borderBottom: `2px solid ${Color.lightBlue}`,
                        },
                      }}
                    >
                      HACKER NEWS
                    </strong>
                  </a>
                </div> */}
              </div>
              <div
                css={{
                  color: Color.white,
                  fontFamily: Font.news,
                  fontSize: "0.9rem",
                  paddingRight: "1rem",
                  marginTop: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p css={{ paddingBottom: "0.5rem" }}>
                  Why Coffee News? because, Y Combinator's Hacker News doesn't
                  have an option to read only the top news (by score, not by
                  rank) for a given date. Coffee News is just an aggregator,
                  source of feed is Hacker News.
                </p>
                <p>
                  Coffee News is for those who want to spend a good and finite
                  amount of time (like coffee time) to catch up with the daily
                  tech news.
                </p>
              </div>
              <div
                css={{
                  margin: "1rem 0",
                }}
              >
                <a
                  href="https://github.com/karthikkumar/hn-cafe/issues/new"
                  target="_blank"
                  rel="noreferrer noopener"
                  css={{
                    textDecoration: "none",
                    fontFamily: Font.news,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    color: Color.lightBlue,
                    cursor: "pointer",
                    borderBottom: `1px solid ${Color.transparent}`,
                    ":hover": {
                      borderBottom: `1px solid ${Color.lightBlue}`,
                    },
                  }}
                >
                  Feedback
                </a>
              </div>
            </div>
            <div
              css={{
                height: "100%",
                borderLeft: `2px solid ${Color.blueLite}`,
                paddingLeft: "1rem",
                lineHeight: "1.2rem",
                fontSize: "1.2rem",
                color: Color.yellow,
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <div css={{ fontFamily: Font.logo, fontWeight: "600" }}>
                Settings
              </div>
              <div
                css={{
                  fontFamily: Font.news,
                  fontWeight: 400,
                  fontSize: "1rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 3fr",
                  gridTemplateRowss: "1fr",
                  gap: "1rem",
                }}
              >
                {/* <div>Theme</div>
                <div
                  css={{
                    color: Color.lightBlue,
                    cursor: "pointer",
                  }}
                >
                  Dark | Light
                </div> */}
                {/* <div>Set time</div>
                <div
                  css={{
                    color: Color.lightBlue,
                    cursor: "pointer",
                  }}
                >
                  UTC | Browser Time
                </div> */}
                {/* <div>Filters</div>
                <div
                  css={{
                    color: Color.lightBlue,
                    cursor: "pointer",
                  }}
                >
                  Show HN | Ask HN | Tell HN
                </div> */}
                <div>Cache</div>
                <div
                  css={{
                    color: Color.yellow,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    queryClient.clear();
                    setRefreshKey((key) => key + 1);
                  }}
                >
                  <span
                    css={{
                      fontFamily: Font.logo,
                      fontSize: "1rem",
                      borderBottom: `2px solid ${Color.transparent}`,
                      ":hover": {
                        borderBottom: `2px solid ${Color.orange}`,
                      },
                    }}
                  >
                    CLEAR
                  </span>
                </div>
                <div>Preferences</div>
                <div
                  css={{
                    color: Color.yellow,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    localStorage.clear();
                    setRefreshKey((key) => key + 1);
                  }}
                >
                  <span
                    css={{
                      fontFamily: Font.logo,
                      fontSize: "1rem",
                      borderBottom: `2px solid ${Color.transparent}`,
                      ":hover": {
                        borderBottom: `2px solid ${Color.orange}`,
                      },
                    }}
                  >
                    RESET
                  </span>
                </div>
              </div>
            </div>
            <div
              css={{
                height: "3rem",
                display: "flex",
                flexDirection: "row-reverse",
                gridColumn: " 1 / span 2",
              }}
            >
              <button
                onClick={() => onClose()}
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
      </div>
    </div>
  );
};

export default Settings;
