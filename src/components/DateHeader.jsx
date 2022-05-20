import PropTypes from "prop-types";
import moment from "moment";
function DateHeader({ date }) {
  if (!date) {
    return null;
  }
  const diff = moment().diff(date, "days", true);
  let dateLabel;
  if (diff <= 0) {
    dateLabel = "Today";
  } else if (diff > 0 && diff < 1) {
    dateLabel = "Yesterday";
  } else {
    dateLabel = date.format("D, MMMM");
  }
  return (
    <div className="date-header">
      <span className="line"></span>
      <p>{dateLabel}</p>
    </div>
  );
}

DateHeader.propTypes = {
  date: PropTypes.object,
};

export default DateHeader;
