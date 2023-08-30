import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initialstate = {
    allNews: [],
    topic: "",
    recent: [],
    fav : [],
  };

  

  const [state, newsDispatch] = useReducer(NewsReducer, initialstate);

  return (
    <NewsContext.Provider value={{ ...state, newsDispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
