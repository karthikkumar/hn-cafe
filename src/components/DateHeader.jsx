/** @jsxImportSource @emotion/react */
import { useRef, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Color, Font } from "../utils/css-vars";
import { useStateContext } from "../state";

const DateHeader = forwardRef(({ date }, ref) => {
  const headerRef = useRef();
  const { setStickyHeader } = useStateContext();

  const diff = moment().diff(moment(date).startOf("date"), "days");
  let dateLabel;
  if (diff === 0) {
    dateLabel = "Today";
  } else if (diff === 1) {
    dateLabel = "Yesterday";
  } else {
    dateLabel = date.format("D, MMMM");
  }

  useImperativeHandle(ref, () => ({
    onScroll: () => {
      const { top } = headerRef.current?.getBoundingClientRect();
      if (top < 20) {
        setStickyHeader(dateLabel);
      }
    },
  }));

  if (!date) {
    return null;
  }

  return (
    <div
      ref={headerRef}
      css={{
        height: "1.2rem",
        backgroundColor: Color.darkBlue,
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
});

DateHeader.propTypes = {
  date: PropTypes.object,
};

export default DateHeader;
