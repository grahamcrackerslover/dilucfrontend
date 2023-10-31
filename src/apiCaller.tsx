import axios from "axios";
import { SERVER_URL } from "./config";

const api = axios.create({
    baseURL: SERVER_URL
})

api.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api