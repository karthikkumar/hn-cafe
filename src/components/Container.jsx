/** @jsxImportSource @emotion/react */
import moment from "moment";
import LeftSidebar from "./LeftSidebar";
import NewsList from "./NewsList";
import { Color } from "../utils/css-vars";
import { useWindowFocus } from "../utils/hooks";
import { LocalStorageKey, getLocalStorage, setLocalStorage } from "../utils";
import { useStateContext } from "../state";

function Container() {
  const { setShowedLastVisitedOnce } = useStateContext();
  useWindowFocus({
    onFocus: () => {
      const currentLastVisited =
        getLocalStorage(LocalStorageKey.CurrentSessionLastVisited) || {};
      const { displayDate: lastVisitedDate, rank: lastRank } =
        getLocalStorage(LocalStorageKey.LastSessionLastVisited) || {};
      const { displayDate: currentDisplayDate, rank: currentRank } =
        currentLastVisited;

      // compare the dates, if current is older than last session
      const currentAgo =
        moment().diff(moment(currentDisplayDate, "DD-MM-YYYY"), "days") +
        0.01 * currentRank;
      const lastAgo =
        moment().diff(moment(lastVisitedDate, "DD-MM-YYYY"), "days") +
        0.01 * lastRank;

      if ((!lastVisitedDate && currentDisplayDate) || currentAgo > lastAgo) {
        setLocalStorage(
          LocalStorageKey.LastSessionLastVisited,
          currentLastVisited
        );
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
          minHeight: "96vh",
          margin: "0.5rem auto",
          display: "grid",
          gridTemplateColumns: "3fr 7fr",
        }}
      >
        <LeftSidebar />
        <NewsList />
      </div>
    </div>
  );
}

export default Container;
