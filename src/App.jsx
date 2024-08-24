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
      "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=e0bf6a45a1af7ec14e8def195ec336bc"
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
