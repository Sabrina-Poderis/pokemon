import axios from "axios"
import CONFIG from "../config/env"

const apiPokeServer = axios.create({
    baseURL: CONFIG.HTTP_BACKEND_POKEMON
})

export default apiPokeServer;