import NewsBody from "./NewsBody";

function NewsBodies({ data }) {
  return (
    <>
      {data.map((news) => (
        <NewsBody key={news.publishedAt} data={news} />
      ))}
    </>
  );
}

export default NewsBodies;
