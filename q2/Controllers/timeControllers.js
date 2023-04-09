const Student=require('../Models/studentModel')
const WorksnapsTimeEntry=require('../Models/worksnapModel')
const mongoose=require('mongoose');

let findEntries=async()=>{
    const students = await Student.find();

  for (const student of students) {
    const timeEntries = await WorksnapsTimeEntry.find({ student: student._id });
    console.log(`Time entries for ${student.firstName} ${student.lastName}:`, timeEntries);
  }

  mongoose.disconnect();
}


module.exports=findEntries;