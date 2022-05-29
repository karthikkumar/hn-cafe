/** @jsxImportSource @emotion/react */
import { Color, Font } from "../utils/css-vars";
import { useQueryClient } from "react-query";

// images
import mug from "../img/mug@2x.png";

const Settings = ({ isOpen, onClose }) => {
  const queryClient = useQueryClient();

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
            height: "400px",
            borderRadius: "10px",
            padding: "2rem 3rem",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "6fr 1fr",
            }}
          >
            <div>
              <div>
                <div>
                  <img src={mug} alt="coffee mug icon" width={36} />
                  <div
                    css={{
                      height: "5px",
                      width: "36px",
                      backgroundColor: Color.orange,
                      marginBottom: "2px",
                    }}
                  ></div>
                  <h1
                    css={{
                      lineHeight: "1.8rem",
                      fontSize: "2rem",
                      fontFamily: Font.logo,
                      fontWeight: "bold",
                      color: Color.yellow,
                    }}
                  >
                    KOFFEE <br />
                    NEWS
                  </h1>
                </div>
                <div
                  css={{
                    fontFamily: Font.logo,
                    lineHeight: "1rem",
                    marginBottom: "1rem",
                    padding: "0.5rem 0",
                  }}
                >
                  <small css={{ color: Color.white, fontSize: "0.8rem" }}>
                    brewed by
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
                      }}
                    >
                      HACKER NEWS
                    </strong>
                  </a>
                </div>
              </div>
              <p
                css={{
                  color: Color.white,
                  fontFamily: Font.news,
                  fontSize: "0.9rem",
                  paddingRight: "1rem",
                }}
              >
                Why Koffee News? because, Y Combinator's Hacker News doesn't
                have an option to read only the top news (by score) for a given
                date. Koffee News is for those who want to spend a finite amount
                of time on catching up tech news.
              </p>
              <div
                css={{
                  margin: "1rem 0",
                }}
              >
                <a
                  href="https://github.com/karthikkumar/koffee-news/issues/new"
                  target="_blank"
                  rel="noreferrer noopener"
                  css={{
                    textDecoration: "none",
                    fontFamily: Font.news,
                    fontSize: "1rem",
                    color: Color.lightBlue,
                    cursor: "pointer",
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
                SETTINGS
              </div>
              <div
                css={{
                  fontFamily: Font.news,
                  fontWeight: 400,
                  fontSize: "1rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 4fr",
                  gridTemplateRowss: "1fr",
                  gap: "0.8rem",
                }}
              >
                <div>Cache</div>
                <div
                  css={{
                    color: Color.lightBlue,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    localStorage.clear();
                    queryClient.clear();
                  }}
                >
                  Clear
                </div>
                <div>Set time</div>
                <div
                  css={{
                    color: Color.lightBlue,
                    cursor: "pointer",
                  }}
                >
                  UTC | Browser Time
                </div>
                <div>Theme</div>
                <div
                  css={{
                    color: Color.lightBlue,
                    cursor: "pointer",
                  }}
                >
                  Dark | Light
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
