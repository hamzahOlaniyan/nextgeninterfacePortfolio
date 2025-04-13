export const getAllNewsArticles = async () => {
  const newsApi = await fetch(
    "https://newsapi.org/v2/everything?q=technology&apiKey=87edf8d4498247fa90957db8590edf62"
  );

  const mediaStackApi = await fetch(
    "https://api.mediastack.com/v1/news?access_key=0b70262077d53e49900525273c7c0dfb&&keywords=javascript&countries=us,gb"
  );

  const news = await newsApi.json();
  const mediaStack = await mediaStackApi.json();
  // const data = news?.articles.concat(mediaStack?.data);
  // return data;
  return mediaStack?.data;
};
