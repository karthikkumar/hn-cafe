/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { useVirtual } from "react-virtual";
import moment from "moment";
import NewsItem from "./NewsItem";
import DateHeader from "./DateHeader";
import { getStories } from "../utils/api";
import { useStateContext } from "../state";

const FilterSet = { 5: 1, 10: 2, 20: 4, 30: 6 };

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
      const { date, startTime, endTime } = pageParam || {
        date: moment(),
        startTime: moment().startOf("date").unix(),
        endTime: moment().endOf("date").unix(),
      };
      const stories = await getStories(startTime, endTime);
      return { date, startTime, endTime, stories };
    },
    {
      getNextPageParam: (lastStoriesByDate) => {
        if (lastStoriesByDate) {
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
  const state = useStateContext();
  const top = parseInt(state.top);

  const rowVirtualizer = useVirtual({
    size: storiesByDates.length,
    parentRef,
    estimateSize: useCallback(() => 380 * FilterSet[top] + 70, [top]),
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
    <main
      ref={parentRef}
      css={{
        padding: "1rem",
        margin: "0.5rem",
        height: "calc(100vh - 2rem)",
        overflow: "auto",
      }}
    >
      <div
        css={{
          height: `${rowVirtualizer.totalSize}px`,
          width: "100%",
          maxWidth: "800px",
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
              {isLoaderRow
                ? hasNextPage
                  ? "brewing..."
                  : "Wow, you've come a long way!"
                : stories
                    .slice(0, top)
                    .map((story, index) => (
                      <NewsItem
                        rank={index + 1}
                        {...story}
                        key={story.id}
                        displayDate={moment(date).format("DD-MM-YYYY")}
                      />
                    ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default NewsList;
