import { useEffect } from "react";
import NewsItem from "./NewsItem";
import Divider from "./Divider";
import DateHeader from "./DateHeader";
import { useAsync } from "../utils/hooks";
import { getStories } from "../utils/api";

function NewsList() {
  const { data, run } = useAsync();

  useEffect(() => {
    run(getStories());
    const polling = setInterval(() => {
      run(getStories());
    }, 60000);
    return () => {
      clearInterval(polling);
    };
  }, [run]);

  console.log({ data });

  return (
    <main id="news-list">
      <div className="date-group">
        <DateHeader />
        {data?.map((item, index) => (
          <NewsItem rank={index + 1} {...item} key={item.id} />
        ))}
        <Divider />
      </div>
    </main>
  );
}

export default NewsList;
