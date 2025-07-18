const express = require('express')
const app = express()
const porta = 8080

app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}))
app.get('/', (req,res)=>{
    res.render('upper')


let rota = app.route('/calcular')


})

rotacalculo.get((req,res)=>{
    res.redirect('/')
})


rotacalculo.post((req,res)=>{
    let dividendo = parseInt(req.body.dividendo)
    let divisor = parseInt(req.body.divisor)

    let resultad = dividendo / divisor
    
    if( divisor == 0 ){
        res.render('erro')
    } 
    else{
        res.render('cruzado',{resultad})
    }
   

})

app.listen(porta,()=>{
    console.log(`Rodando na porta http://localhost:${porta}`)
})