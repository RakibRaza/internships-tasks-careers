import React, { useEffect, useState } from 'react'
import HorizontalNews from '../HorizontalNews/HorizontalNews';
import Pagination from '../Pagination/Pagination';
import VerticalNews from '../VerticalNews/VerticalNews';

const News = ({ isVertical }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(4);

  const [pageNumberLimit, setPageNumberLimit] = useState(3)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

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

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const removeNews = (id) => {
    setNews(news.filter(item => item.id !== id))
  }

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1)

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  return (

    <div className='container' >
      {isVertical ? <div className="row" >
        {currentNews.map(item => <VerticalNews key={item.id} {...item} removeNews={removeNews} />)}
      </div > : <div className="row">
        {currentNews.map(item => <HorizontalNews removeNews={removeNews} key={item.id} {...item} />)}
      </div>}
      <Pagination newsPerPage={newsPerPage}
        totalNews={news.length}
        paginate={paginate} currentPage={currentPage} handleNextBtn={handleNextBtn} handlePrevBtn={handlePrevBtn} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} />
    </div>
  )
}

export default News
