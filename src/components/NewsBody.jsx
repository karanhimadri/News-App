function NewsBody({data}) {
  const datas = {
    title: "Not against e-commerce, but seeking fair play, says Piyush Goyal",
    description:
      "The minister reiterated the example of the impact of the e-commerce industry in the US, saying that the rise of e-commerce led to the disappearance of “mom and pop” stores in the country.",
    content:
      "A day after expressing concern over the use of predatory pricing strategies by e-commerce players in the country, Commerce and Industry Minister Piyush Goyal on Thursday stated that the government has no intention of halting online commerce but desir... [550 chars]",
    url: "https://indianexpress.com/article/business/economy/not-against-e-commerce-but-seeking-fair-play-says-piyush-goyal-9528256/",
    image: "https://images.indianexpress.com/2024/08/piyush-goyal.jpg",
    publishedAt: "2024-08-22T22:00:54Z",
    source: {
      name: "The Indian Express",
      url: "https://indianexpress.com",
    },
  };
  return (
    <>
      <div class="news-container">
        <div className="news-inner-container">
          <div class="col-md-4 news-img">
            <img
              src={`${data.image}`}
              class="img-fluid rounded-start"
              alt="News Image"
            />
          </div>
          <div class=" card-content">
            <h4 class="news-title">
              {" "}
              <b>
                {data.title}
              </b>
            </h4>
            <p className="news-description">
                {data.description}
            </p>
          </div>
        </div>
        <div className="sub-content">
          <p class="news-content">{data.content}
          </p>
          <p className="news-url">
            Visit here :
            <a href={`${data.url}`}>
              {data.url}
            </a>
          </p>
          <p class="card-text">
            <small class="news-date">Published At : {data.publishedAt.split('T')[0]}</small>
          </p>
        </div>
      </div>
    </>
  );
}
export default NewsBody;
