import React, { useContext, useState } from "react";
import NewsContext from "../../context/NewsContext/NewsContext";
import { fetchNews } from "../../context/NewsContext/NewsApi";
const Header = () => {
  const [activelink, setActivelink] = useState(1);
    const { newsDispatch } = useContext(NewsContext)
  const handleclick = async(id,search) => {
      setActivelink(id);
      const data = await fetchNews(search)
      newsDispatch(
          {
              type: "GET_NEWS",
              payload: {
                  news: data,
                  topic: search,
                  recent : search
              }
              
        }
      )
    }
    
  const list = [
    { id: 1, text: "Indore", search : "indore"  },
    { id: 2, text: "Sports", search : "indian sports" },
    { id: 3, text: "Politics", search : "indian politics" },
    { id: 4, text: "Bussiness", search : "bussiness" },
    { id: 5, text: "Technology", search : "technology" },
    { id: 6, text: "Entertainment", search : "bollywood" },
    { id: 7, text: "Top Headlines", search : "top Headlines" },
  ];

  return (
    <header className='container'>
      <div className='d-flex justify-content-center py-3'>
        <ul className='nav'>
                  {list.map((link) =>(
            <li key={link.id} className='nav-item'>
              <a
                onClick={()=>handleclick(link.id,link.search)}
                className={
                  link.id == activelink ? "nav-link text-danger" : "nav-link"
                }
                href='#'
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
