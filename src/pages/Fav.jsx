import React, { useContext } from 'react'
import NewsCard from '../components/NewsCard/NewsCard'
import NewsContext from '../context/NewsContext/NewsContext'

const Fav = () => {
    const { fav } = useContext(NewsContext)

    if (!fav || fav.length===0) {
        return (
            <div className='container d-flex flex-column my-3'>
                <h1 className="text-black">No data to show mark your favorite news to show it here</h1>
                </div>
        )  
    }
    return (
        <div className='container d-flex flex-column'>
          {fav.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
    )
 
}

export default Fav
