import apiPokeServer from "./api"

const getPokemon = async (id_poke: number) => {
    try {
        const response = await apiPokeServer.get(`/pokemon/${id_poke}`)
        return response.data
    } catch (error) {
        return error
    }
}

export default getPokemon