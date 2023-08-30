const NewsReducer = (state, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        allNews: action.payload.news,
        topic: action.payload.topic,
      };
    case "SEARCH_NEWS":
      return {
        ...state,
        allNews: action.payload.news,
        topic: action.payload.topic,
        recent: [...state.recent, action.payload.recent],
        fav: state.fav,
          };
      
      case "GET_FAV":
          return {
              ...state,
              fav : [...state.fav,action.payload.fav]
          }
      
    case "REMOVE_FAV": {
      return {
        ...state,
        fav : state.fav.filter((item)=>{item!==action.payload.fav})
      }
    }
        
    default:
      return {
        state,
      };
  }
};

export default NewsReducer;
