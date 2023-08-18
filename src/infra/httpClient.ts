import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default httpClient;
