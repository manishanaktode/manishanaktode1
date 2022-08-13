const express = require('express')
const bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.json())
app.get('/login',(req,res)=>{
    res.sendFile('form.html',{root :_dirname})

});
app.post('/loginJson',(req,res)=>{
    console.log(req.body)
    res.send('data received')
})
app.listen(5000, () => {
    console.log('server has started at http://localhost:5000')
})