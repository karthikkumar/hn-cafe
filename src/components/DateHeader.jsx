/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import moment from "moment";
import { Color, Font } from "../utils/css-vars";
function DateHeader({ date }) {
  if (!date) {
    return null;
  }
  const diff = parseFloat(moment().diff(date, "days", true).toFixed(2));
  let dateLabel;
  if (diff <= 0) {
    dateLabel = "Today";
  } else if (diff > 0 && diff < 1) {
    dateLabel = "Yesterday";
  } else {
    dateLabel = date.format("D, MMMM");
  }
  return (
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
  );
}

DateHeader.propTypes = {
  date: PropTypes.object,
};

export default DateHeader;
