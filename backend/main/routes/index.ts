import { Router } from 'express';
import pokeRouter from './pokemon';

const routes = Router();

routes.use('/pokemon', pokeRouter);

export default routes;
