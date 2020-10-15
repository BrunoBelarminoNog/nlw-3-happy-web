//METODOS HTTP = GET, POST, PUT, DELETE
//GET = Buscar uma informação (*lista, item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

//PARAMETROS
//QUERY PARAMS: https://localhost:3333/users?search=diego
//ROUTE PARAMS: https://localhost:3333/users/:id
//BODY: formularios


//  MVC
//MODEL
//VIEWS
//CONTROLLERS


import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanageController from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig)

routes.get("/orphanages", OrphanageController.index)
routes.get("/orphanages/:id", OrphanageController.show)
routes.post("/orphanages", upload.array('images'),OrphanageController.create)


export default routes;