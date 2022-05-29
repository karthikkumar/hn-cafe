/** @jsxImportSource @emotion/react */
import moment from "moment";
import LeftSidebar from "./LeftSidebar";
import NewsList from "./NewsList";
import { Color } from "../utils/css-vars";
import { useDocumentEvent } from "../utils/hooks";
import { LocalStorageKey, getLocalStorage, setLocalStorage } from "../utils";
import { useStateContext } from "../state";
import { StoreDateFormat } from "../constants";

function Container() {
  const { setShowedLastVisitedOnce, refreshKey } = useStateContext();
  useDocumentEvent({
    onMouseEnter: () => {
      // swap current session's last visited data as last session data
      const currentLastVisited =
        getLocalStorage(LocalStorageKey.CurrentSessionLastVisited) || {};
      const {
        displayDate: lastVisitedDate,
        rank: lastRank,
        lastSeen,
      } = getLocalStorage(LocalStorageKey.LastSessionLastVisited) || {};

      const { displayDate: currentDisplayDate, rank: currentRank } =
        currentLastVisited;

      // compare the dates, if current is older than last session
      const currentAgo =
        moment().diff(moment(currentDisplayDate, StoreDateFormat), "days") +
        0.01 * currentRank;
      const lastAgo =
        moment().diff(moment(lastVisitedDate, StoreDateFormat), "days") +
        0.01 * lastRank;

      // remove last visited data if visiting after more than 3 days
      const lastSeenDiff = moment().diff(
        moment(lastSeen, StoreDateFormat),
        "days"
      );

      if (lastSeenDiff > 3) {
        localStorage.removeItem(LocalStorageKey.LastSessionLastVisited);
      } else if (
        (!lastVisitedDate && currentDisplayDate) ||
        currentAgo > lastAgo
      ) {
        setLocalStorage(LocalStorageKey.LastSessionLastVisited, {
          ...currentLastVisited,
          lastSeen: moment().format(StoreDateFormat),
        });
      }

      if (currentAgo !== lastAgo) {
        setShowedLastVisitedOnce(false);
      }
    },
  });

  return (
    <div
      css={{
        width: "100vw",
        height: "100vh",
        backgroundColor: Color.darkBlue,
        overflowY: "auto",
      }}
    >
      <div
        css={{
          backgroundColor: Color.darkBlue,
          minHeight: "calc(100vh - 1rem)",
          margin: "0.5rem auto",
          display: "grid",
          gridTemplateColumns: "3fr 7fr",
        }}
      >
        <LeftSidebar />
        <NewsList key={refreshKey} />
      </div>
    </div>
  );
}

export default Container;
