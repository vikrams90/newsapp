const WeatherReducer = (state, action) => {
    
    switch (action.type) {
        case "GET_WEATHER":
            return {
                weather: {
                    name: action.payload.name,
                    country: action.payload.country,
                    temp: action.payload.temp,
                    weather: action.payload.weather,
                    icon: action.payload.icon,
                }
            }
        
        default:
            return {
                state
            }
    }

}

export default WeatherReducer