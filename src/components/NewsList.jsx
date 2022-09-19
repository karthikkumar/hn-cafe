/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { useVirtual } from "react-virtual";
import moment from "moment";
import NewsItem from "./NewsItem";
import DateHeader from "./DateHeader";
import { getStories } from "../utils/api";
import { useStateContext } from "../state";
import { StoreDateFormat } from "../constants";
import Loading from "./Loading";
import Divider from "./Divider";
import Error from "./Error";
import { Color } from "../utils/css-vars";
import StickyHeader from "./StickyHeader";
import LeftSidebar from "./LeftSidebar";

const FilterSet = { 5: 1, 10: 2, 20: 4, 30: 6 };

function NewsList() {
  const {
    isLoading,
    isError,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "storiesByDate",
    async ({ pageParam }) => {
      const { date, startTime, endTime } = pageParam || {
        date: moment(),
        startTime: moment().startOf("date").unix(),
        endTime: moment().endOf("date").unix(),
      };
      const stories = await getStories(startTime, endTime);
      return { date, startTime, endTime, stories };
    },
    {
      getNextPageParam: (lastStoriesByDate, allStoriesByDate) => {
        // Restrict: not more than 100 days
        if (lastStoriesByDate && allStoriesByDate?.length < 100) {
          const lastDate = lastStoriesByDate.date;
          const previousDate = moment(lastDate).subtract(1, "days");
          return {
            date: previousDate,
            startTime: previousDate.startOf("date").unix(),
            endTime: previousDate.endOf("date").unix(),
          };
        }
      },
    }
  );

  const storiesByDates = data?.pages ?? [];

  const parentRef = useRef();
  const { top: topFilter, stickyHeader, refreshKey } = useStateContext();
  const top = parseInt(topFilter);

  const rowVirtualizer = useVirtual({
    size: storiesByDates.length,
    parentRef,
    estimateSize: useCallback(() => 330 * FilterSet[top] + 70, [top]),
  });

  const [lastItem] = [...rowVirtualizer.virtualItems].reverse();

  useEffect(() => {
    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= storiesByDates.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    lastItem,
    hasNextPage,
    fetchNextPage,
    storiesByDates.length,
    isFetchingNextPage,
    rowVirtualizer.virtualItems,
  ]);

  return (
    <main
      ref={parentRef}
      css={{
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        justifyContent: "center",
        borderTop: `1rem solid ${Color.darkBlue}`,
        borderBottom: `1rem solid ${Color.darkBlue}`,

        "@media (max-width: 900px)": {
          flexDirection: "column",
        },
      }}
    >
      <LeftSidebar />
      <div
        css={{
          height: `${rowVirtualizer.totalSize}px`,
          width: "800px",
          marginLeft: "50px",
          marginRight: "auto",
          position: "relative",

          "@media (max-width: 1200px)": {
            marginLeft: "20px",
          },
        }}
        key={refreshKey}
      >
        {!storiesByDates.length && isLoading && <Loading />}
        {!storiesByDates.length && isError && <Error />}
        {stickyHeader && <StickyHeader title={stickyHeader} />}
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          const { date, stories } = storiesByDates.length
            ? storiesByDates[virtualRow.index]
            : {};
          return (
            <div
              key={virtualRow.index}
              css={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <DateHeader date={date} />
              {stories.slice(0, top).map((story, index) => (
                <NewsItem
                  rank={index + 1}
                  {...story}
                  key={story.id}
                  displayDate={moment(date).format(StoreDateFormat)}
                />
              ))}
            </div>
          );
        })}
        {!storiesByDates.length || hasNextPage ? (
          isFetchingNextPage &&
          !isError && (
            <Loading
              style={{
                position: "absolute",
                width: "100%",
                transform: `translateY(${lastItem?.end}px)`,
              }}
            />
          )
        ) : (
          <Divider
            message="Wow, you've come a long way!"
            style={{
              fontSize: "0.9rem",
              position: "absolute",
              width: "100%",
              transform: `translateY(${lastItem?.end}px)`,
            }}
          />
        )}
        {isFetchingNextPage && isError && (
          <Divider
            message="Brewer has stopped pumping!"
            style={{
              fontSize: "0.9rem",
              position: "absolute",
              width: "100%",
              transform: `translateY(${lastItem?.end}px)`,
            }}
          />
        )}
      </div>
    </main>
  );
}

export default NewsList;
