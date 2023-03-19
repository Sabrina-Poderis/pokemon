import { Router } from 'express';
import getPokemon from "../../controller"

const pokeRouter = Router();

pokeRouter.get('/:id_poke', getPokemon);

export default pokeRouter;
