import React, { useContext, useEffect, useState } from "react";
import NewsContext from "../../context/NewsContext/NewsContext";

const NewsCard = ({ news }) => {
  const {  newsDispatch } = useContext(NewsContext);
  const [isactive,setisActive] =useState(false)
  function handleclick() {
    newsDispatch({
      type: "GET_FAV",
      payload: {
        fav: {
          title: news.title,
          description: news.description,
          author: news.author,
          url: news.url,
          urlToImage: news.urlToImage,
        },
        },
    });
      setisActive((prevState) => {
          return !prevState
      })
  }

 

  return (
    <div className='card mb-3 col-12 p-2'>
      <div className='row g-2'>
        <div className='col-md-4 d-flex align-items-center'>
          <img
            className='img-fluid rounded-start'
            src={
              news.urlToImage
                ? news.urlToImage
                : "https://img.freepik.com/free-vector/global-technology-earth-news-bulletin-background_1017-33687.jpg?size=626&ext=jpg&ga=GA1.2.1214192651.1689850149&semt=sph"
            }
            alt='...'
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{news.title}</h5>
            <p className='card-text'>{news.description}</p>
            <p className='card-text'>
              <small className='text-body-secondary'>{news.author}</small>
            </p>
            <a className='btn btn-primary' href={news.url} target='_blank'>
              Read More
            </a>
            <svg
              onClick={() => {
                handleclick();
              }}
              className={isactive? "fav-active" : "fav"}
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 46 39'
            >
              <path d='M11.3055 0C8.19651 0 5.42666 1.30014 3.33513 3.33513C1.30014 5.37013 0 8.13999 0 11.3055C0 14.4146 1.30014 17.1844 3.33513 19.2759L22.6111 38.5519L41.887 19.2759C43.922 17.2409 45.2221 14.4711 45.2221 11.3055C45.2221 8.19651 43.922 5.42666 41.887 3.33513C39.852 1.30014 37.0822 0 33.9166 0C30.8076 0 28.0377 1.30014 25.9462 3.33513C23.9112 5.37013 22.6111 8.13999 22.6111 11.3055C22.6111 8.19651 21.3109 5.42666 19.2759 3.33513C17.2409 1.30014 14.4711 0 11.3055 0Z' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
