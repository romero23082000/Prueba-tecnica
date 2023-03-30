import axios from 'axios';


const getNews = (number) => {
  const request = axios.get(`http://hn.algolia.com/api/v1/search?tags=front_page&page=${number}&hitsPerPage=8`)
  return request.then(response => response.data)
}
// http://hn.algolia.com/api/v1/search_by_date?query=${type}&tags=story&page=0&hitsPerPage=8
const getNewsType = (type, number) => {
  const request = axios.get(`http://hn.algolia.com/api/v1/search_by_date?query=${type}&tags=story&page=${number}&hitsPerPage=8`)
  return request.then(response => response.data)
}

export default {
  getNews,
  getNewsType,
}