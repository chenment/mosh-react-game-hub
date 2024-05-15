import axios from "axios"


export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6ebf90060bef42ec95f26c3af94ec148'
  }
})
