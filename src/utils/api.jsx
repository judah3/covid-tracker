import axios from "axios"

const API_URL = "https://covid19.mathdro.id/api"

const get = (endpoint) => {
  return axios.get(`${API_URL}${endpoint}`)
}

export { get }