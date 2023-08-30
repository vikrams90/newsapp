export const fetchNews = async (topic) => {
    let response = null
    if (topic === "top Headlines") {
       
        response = await fetch(
               `https://newsapi.org/v2/top-headlines?country=in&apiKey=02adbae359f54b31839906b25c7f92dc`
            );
    }
    else {
        response = await fetch(
               `https://newsapi.org/v2/everything?q=${topic}&apiKey=02adbae359f54b31839906b25c7f92dc`
            ); 
    }
    const data = await response.json()
    return data.articles
}