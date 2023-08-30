import React, { useContext } from 'react'
import { fetchNews } from '../../context/NewsContext/NewsApi'
import NewsContext from "../../context/NewsContext/NewsContext";

const RecentButton = ({ search }) => {
    
    const { newsDispatch } = useContext(NewsContext)

    const handleclick= async()=> {
        const data = await fetchNews(search)
        newsDispatch({
            type: "GET_NEWS",
            payload: {
                news: data,
                topic: search,
            }
        })
    }
  return (
    <button onClick={()=>{handleclick()}} className="btn btn-outline-danger">{search}</button>
  )
}

export default RecentButton
