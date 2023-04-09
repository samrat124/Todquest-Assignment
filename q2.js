const mongoose = require('mongoose');

const WorksnapsTimeEntry = mongoose.model('WorksnapsTimeEntry', new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  timeEntries: {
    type: Object
  }
}));

const Student = mongoose.model('Student', new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  displayName: {
    type: String,
    trim: true
  },
  municipality: {
    type: String
  }
}));

mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true });

async function showStudentTimeEntries() {
  const students = await Student.find();

  for (const student of students) {
    const timeEntries = await WorksnapsTimeEntry.find({ student: student._id });
    console.log(`Time entries for ${student.firstName} ${student.lastName}:`, timeEntries);
  }

  mongoose.disconnect();
}

showStudentTimeEntries();
