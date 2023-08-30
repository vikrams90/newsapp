import React, { useContext, useEffect } from "react";
import NewsContext from "../../context/NewsContext/NewsContext";
import NewsCard from "../NewsCard/NewsCard";
import { fetchNews } from "../../context/NewsContext/NewsApi";
import NewsSkeleton from "../NewsSkeleton/NewsSkeleton";

const NewsList = () => {
  const { topic, allNews, newsDispatch } = useContext(NewsContext);

  const getnews = async (topic) => {
    const data = await fetchNews(topic);
    newsDispatch({
      type: "GET_NEWS",
      payload: {
        news: data,
        topic: topic,
        recent: topic,
      },
    });
  };

  useEffect(() => {
    getnews("indore");
  }, []);
  if (!allNews || allNews.length == 0) {
    return (
      <div className='container d-flex flex-column'>
        <NewsSkeleton />
        <NewsSkeleton />
        <NewsSkeleton />
        <NewsSkeleton />
      </div>
    );
  }

  return (
    <>
      <div className='container d-flex flex-column'>
        <h1>showing news for {topic}</h1>
        {allNews.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </>
  );
};

export default NewsList;
