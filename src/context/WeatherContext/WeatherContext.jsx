import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialstate = {
      weather: { },
  };

  const [state, weatherDispatch] = useReducer(WeatherReducer, initialstate);

  return (
    <WeatherContext.Provider value={{ ...state, weatherDispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
