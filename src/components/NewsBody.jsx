function NewsBody({ data }) {
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
              <b>{data.title}</b>
            </h4>
            <p className="news-description">{data.description}</p>
          </div>
        </div>
        <div className="sub-content">
          <p class="news-content">{data.content}</p>
          <p className="news-url">
            Visit here :<a href={`${data.url}`}>{data.url}</a>
          </p>
          <p class="card-text">
            <small class="news-date">
              Published At : {data.publishedAt.split("T")[0]}
            </small>
          </p>
        </div>
      </div>
    </>
  );
}
export default NewsBody;
