import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';

function App() {
  const [allNews, SetAllNews] = useState([]);
  // Load Data
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=f80989e0f5404e2baa96b2f117909c1b")
      .then(response => response.json())
      .then(data => SetAllNews(data.articles))
  }, [])
  return (
    <div className="container">
      {allNews.length === 0 ?
        <div className="text-center">
          <Spinner animation="border" role="status"></Spinner>
          <p>Loading...</p>
        </div>
        :
        <Row xs={1} md={2} lg={3} className="g-3">
          {
            allNews.map(news => <News news={news}></News>)
          }
        </Row>
      }
    </div>
  );
}

export default App;
