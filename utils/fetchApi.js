import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "2b57e7d6cfmsh4143f4af5d9a501p1d7c37jsnb5cf21f61c5c"
    },
  });

  return data;
};
