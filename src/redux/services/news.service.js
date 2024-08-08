export const getNewsByApi = async (query  = 'all') => {

   const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)

   const data = await response.json();

   return data.articles;
}