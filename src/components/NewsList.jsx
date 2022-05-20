import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { useVirtual } from "react-virtual";
import moment from "moment";
import NewsItem from "./NewsItem";
import DateHeader from "./DateHeader";
import { getStories } from "../utils/api";

const getTodayParam = () => {
  const today = moment();
  return {
    date: today,
    startTime: today.startOf("date").unix(),
    endTime: today.endOf("date").unix(),
  };
};

function NewsList() {
  const {
    status,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    "storiesByDate",
    async ({ pageParam }) => {
      const { date, startTime, endTime } = pageParam || getTodayParam();
      const stories = await getStories(startTime, endTime);
      return { date, startTime, endTime, stories };
    },
    {
      getNextPageParam: (lastStoriesByDate, storiesByDates) => {
        if (!storiesByDates?.length) {
          const today = moment();
          return {
            date: today,
            startTime: today.startOf("date").unix(),
            endTime: today.endOf("date").unix(),
          };
        } else if (lastStoriesByDate) {
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

  const rowVirtualizer = useVirtual({
    size: storiesByDates.length,
    parentRef,
    estimateSize: useCallback(() => 560, []),
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.virtualItems].reverse();

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
    hasNextPage,
    fetchNextPage,
    storiesByDates.length,
    isFetchingNextPage,
    rowVirtualizer.virtualItems,
  ]);

  return (
    <main id="news-list" ref={parentRef}>
      <div
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          const isLoaderRow = virtualRow.index > storiesByDates.length - 1;
          const { date, stories } = storiesByDates.length
            ? storiesByDates[virtualRow.index]
            : {};

          return (
            <div
              key={virtualRow.index}
              className="date-group"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <DateHeader date={date} />
              {isLoaderRow
                ? hasNextPage
                  ? "Loading more..."
                  : "Nothing more to load"
                : stories.map((story, index) => (
                    <NewsItem rank={index + 1} {...story} key={story.id} />
                  ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default NewsList;
