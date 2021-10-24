console.log('hola');

const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3010;

app.use(express.json());

const Whitelist = ['http://localhost:8080', 'https://myapp.co']
const optionsCors = {
  origin: (origin, callback) => {
    if(Whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('No permitido'));
    }
  }
}
app.use(cors(optionsCors));

app.get('/', (req,res) =>{
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req,res) =>{
  res.send('Hola soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});



