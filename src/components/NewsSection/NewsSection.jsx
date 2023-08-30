import React from 'react'
import NewsList from '../NewsList/NewsList'
import RecentSearch from '../RecentSearch/RecentSearch'
import WeatherCard from '../WeatherCard/WeatherCard'

const NewsSection = () => {
    return (
    <div className='container my-3'>
    <div className='row my-2'>
          <div className='col-8'>
              <NewsList/>
        </div>
                <div className='col-4'>
           <RecentSearch/>   
                  <WeatherCard/>  
        </div>
    </div>
    </div>
  )
}

export default NewsSection
