import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODc5ZDY5YTVjY2U2Yjc0MzU0MzRmZTc1MDIwZWQyNiIsInN1YiI6IjY2MDMwZGI3MTk3ZGU0MDE4NjFjZWNjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ajyPjkVEYfQro9K0bp2zgtkjRSTiqO_Hjl550b5ITJ4";

const fetchFilmsByQuery = async (query) => {
  const { data } = await axios.get(`${BASE_URL}`, {
    params: {
      query: query,
    },
    headers: {
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
    },
  });
  return data;
};

export default fetchFilmsByQuery;
