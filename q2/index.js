const express=require('express');
const connect=require('./Models/dbconnect')
 const studentRouter=require('./AllRouters/studentRouter')

const app=express();

app.get('/',studentRouter,(req,res)=>{
    res.send('samrat');
})


const port=3035;
connect().then(()=>{

    app.listen(port,()=>{
        console.log('app started listening port 3035')
    })
    })