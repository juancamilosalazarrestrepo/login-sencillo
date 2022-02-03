//1 invocamos express

const express = require('express');
const app = express();

//2 seteamos urlencoded para capturar los datos del formulario

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3 invocamos a dotnev

const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//4 directorio public
app.use('/resourses', express.static('public'));
app.use('/resourses',express.static(__dirname + '/public'));

//5 establecer motor de plantillas
app.set('view engine', 'ejs');

//6 invocar al modulo de hashin de password bcryptsjs

const bcryptjs = require('bcryptjs');

//7 var  de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}))


console.log(__dirname);


app.get('/',(req,res)=>{
    res.send('hola mundo');
})


app.listen(3000, (req, res)=>{
console.log('SERVER RUNNIG in port 3000')
})