import dotenv from 'dotenv'
dotenv.config()

const CONFIG = {
    PORT: process.env.PORT,
    HTTP_API_POKEMON:  process.env.API_POKEMON
}

export default CONFIG