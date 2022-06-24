import path from 'path'
import express from 'express'
import cors from 'cors'

// ? middlewares
import ErrorMiddleware from './middlewares/error.middleware'

// ? rutas
import { routes as user_routes } from './routes/user.routes'

// * cargar 'app'
const app = express()

// ? cargar middlewares en 'app'
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors())


// ? agregar rutas
app.use(user_routes)

app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname)
    };
     
    var fileName = 'public/index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

// ? middlewares de error
app.use(ErrorMiddleware)

export default app
