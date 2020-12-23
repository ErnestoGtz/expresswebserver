const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const hbs = require('hbs');
require('./hbs/helpers');

//con esto podemos poner una carpeta como publica para que express
//la muestre 
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    //res.send('Hello World');

    // let salida = {
    //     nombre:'Ernesto',
    //     edad:35,
    //     url:req.url
    // }

    res.render('home',{
        nombre:'ernesto gutierrez'
    });

});


app.get('/about',(req,res)=>{
    res.render('about');
});

// app.get('/data',(req,res)=>{
//     res.send('Hola data');
// });

app.listen(port,()=>{
    console.log(`Webserver is online on port ${port}`);
});