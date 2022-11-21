const express = require('express')
const app = express()
app.use(express.json())


///create server using exress
const PORT = 3000
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})




app.get('/hello',(req,res)=>{
  
    res.send("Hello world")
})

app.post('/hello',(req,res)=>{

    res.send("Hello world post")
    console.log(req.body.name)
})
