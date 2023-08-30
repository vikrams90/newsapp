export const fetchWeather = async (topic) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=a70917a8318b4db5b06185121232607&q=${topic}&aqi=no`
  );
  const data = await response.json();
  return data;
};
