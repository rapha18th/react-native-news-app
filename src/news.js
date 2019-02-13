const url =
  "https://newsapi.org/v2/everything?q=technology&apiKey=89759c334b7c43ba80437587fbfda932";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}