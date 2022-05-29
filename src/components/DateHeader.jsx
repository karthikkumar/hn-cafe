/** @jsxImportSource @emotion/react */
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Color, Font } from "../utils/css-vars";
import { useStateContext } from "../state";
function DateHeader({ date }) {
  const headerRef = useRef();
  const [hide, setHide] = useState(false);
  const { setStickyHeader } = useStateContext();

  const diff = parseFloat(moment().diff(date, "days", true).toFixed(2));
  let dateLabel;
  if (diff <= 0.1) {
    dateLabel = "Today";
  } else if (diff > 0 && diff < 2) {
    dateLabel = "Yesterday";
  } else {
    dateLabel = date.format("D, MMMM");
  }

  // eslint-disable-next-line
  useEffect(() => {
    const { top } = headerRef.current?.getBoundingClientRect();
    if (top < 50) {
      setHide(true);
      setStickyHeader(dateLabel);
    } else {
      setHide(false);
    }
  });

  if (!date) {
    return null;
  }

  return (
    <div
      ref={headerRef}
      css={{
        height: "1.2rem",
        backgroundColor: Color.darkBlue,
        visibility: hide ? "hidden" : "visible",
      }}
    >
      <div
        css={{
          color: Color.yellow,
          fontFamily: Font.news,
          fontSize: "0.9rem",
          textAlign: "start",
          padding: "0 1rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <span
          css={{
            height: "1px",
            width: "100%",
            backgroundColor: Color.yellowLite,
            margin: "0.6rem",
          }}
        ></span>
        <p css={{ flexShrink: 0 }}>{dateLabel}</p>
      </div>
    </div>
  );
}

DateHeader.propTypes = {
  date: PropTypes.object,
};

export default DateHeader;
