import axios from "axios"
import { Request, Response } from "express";
import CONFIG from "../main/env"

const {HTTP_API_POKEMON} = CONFIG;

interface IRequestPokemon {
  id_poke: String;
}

const getPokemon = (req: Request<IRequestPokemon>, res: Response) => {
  const id_poke = req.params.id_poke;

  axios.get(`${HTTP_API_POKEMON}/pokemon/${id_poke}`).then((response) => {
    res.send(response.data)
  }).catch((error) => {
    res.status(error.response.status || 500)
    res.send(error)
  })
}

export default getPokemon