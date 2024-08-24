import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import NewsBodies from "./components/NewsBodies";
import Footer from "./components/Footer";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    fetch(
      "https://gnews.io/api/v4/top-headlines?country=in&category=general&apikey=93cbebf3e1ff0aa8c47715a0ea03b3a9"
    )
      .then((res) => res.json())
      .then((data) => {
        setNewsData(data.articles);
        setLoadingState(false);
      })
      .catch((err) => {
        console.log("ERROR :", err);
        setLoadingState(false);
      });
  }, []);
  console.log(newsData);
  return (
    <>
      <Header />
      {loadingState ? <Loading /> : <NewsBodies data={newsData} />}
      <Footer />
    </>
  );
}

export default App;
