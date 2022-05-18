import NewsItem from "./NewsItem";
import Divider from "./Divider";
import DateHeader from "./DateHeader";

function NewsList() {
  return (
    <main id="news-list">
      <div className="date-group">
        <DateHeader />
        <NewsItem />
        <NewsItem />
        <Divider />
      </div>
    </main>
  );
}

export default NewsList;
