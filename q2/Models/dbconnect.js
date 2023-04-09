const mongoose=require('mongoose');

const connect=async()=>{
    let res=await mongoose.connect('mongodb://127.0.0.1:27017/student')
    return res
}
module.exports=connect;