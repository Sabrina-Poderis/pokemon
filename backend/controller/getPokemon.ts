import axios from "axios"
import { Request, Response } from "express";
import CONFIG from "../main/env"

const {HTTP_API_POKEMON} = CONFIG;

interface IRequestPokemon {
  id_poke: String;
}

const getPokemon = (req: Request, res: Response) => {
  // const params: IRequestPokemon = req.params;

  axios.get(`${HTTP_API_POKEMON}/pokemon/${req.params.id_poke}`).then((response) => {
    res.send(response.data)
  }).catch((error) => {
    console.log(error)
  })
}

export default getPokemon