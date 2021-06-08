import React, { useEffect, useState } from 'react'
import HorizontalNews from '../HorizontalNews/HorizontalNews';
import VerticalNews from '../VerticalNews/VerticalNews';

const News = ({ isVertical }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(4);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const res = await fetch('https://api.first.org/data/v1/news');
      const data = await res.json()
      setNews(data.data);
      setLoading(false);
    };

    fetchNews();
  }, []);


  // Get current News
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  console.log(news)

  const removeNews = (id) => {
    setNews(news.filter(item => item.id !== id))
  }

  return (

    <div className='container' >
      {isVertical ? <div className="row" >
        {currentNews.map(item => <VerticalNews key={item.id} {...item} removeNews={removeNews} />)}
      </div > : <div className="row">
        {currentNews.map(item => <HorizontalNews removeNews={removeNews} key={item.id} {...item} />)}
      </div>}
    </div>
  )
}

export default News
