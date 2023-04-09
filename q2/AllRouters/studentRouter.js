const express=require('express');
const studentRouter=express.Router();
const findEntries=require('../Controllers/timeControllers')

studentRouter.get('/',findEntries)
module.exports=studentRouter;
