import React, { useContext } from 'react'
import NewsContext from '../../context/NewsContext/NewsContext'
import RecentButton from '../RecentButton/RecentButton'

const RecentSearch = () => {
    const { recent } = useContext(NewsContext)
    let recents = []
    if (recent.length > 10) {
        for (let i = recent.length-1; i > (recent.length - 10); i--){
            recents[recent.length - i] = recent[i]
        }
    } else {
       recents=[...recent]
    }

    // console.log(recent)
  return (
      <div className="w-75 gap-2 d-flex flex-column">
          <h1>Recent Searches</h1>
          <div className='gap-2 d-flex flex-wrap '>
              <RecentButton search={"sports"} />
            {recents.map((search,index)=>(<RecentButton key={index} search={search} />))}
              
          </div>
  </div>
  )
}

export default RecentSearch
