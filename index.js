const express = require('express')
const app = express()
const cors = require('cors')
const handlebars = require('express-handlebars')
const connection = require('./connection')
const bp = require('body-parser')
const { response } = require('express')
const path = require('path')
const Emproute = require('./Routes/employee.js')

app.use(bp.urlencoded({
    extended: true
}));
app.use(cors());
app.options('*',cors());
app.engine('hbs', handlebars({
    extname:".hbs",
    defaultLayout:"main",
    runtimeOptions: {
        allowProtoPropertiesByDefault:true,
        allowProtoMethodsByDefault:true
    },

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'))
app.use('/emp', Emproute);

app.get('/', (req, res)=>{
    //res.send('<h1> Hello World !!!</h1>');
    res.render('index.hbs')
});

app.get('/about', (req, res)=>{
    //res.send('<h1> Hello World !!!</h1>');
    res.render('about.hbs');
});
app.listen(3000, ()=> {
    console.log("server started")
});