import { Router } from 'express'
import { getUsers, getUser, postUser, putUser, delUser} from '../controllers/users.controller'

export const routes = Router()

routes.get('/users', getUsers)
routes.get('/user/:id', getUser)
routes.post('/user', postUser)
routes.put('/user/:id', putUser)
routes.delete('/user/:id', delUser)
