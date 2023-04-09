const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorksnapsTimeEntrySchema = new Schema({
  student: {
    type: Schema.ObjectId,
    ref: 'Student'
  },
  timeEntries: {
    type: Object
  }
});

const StudentSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: ''
    // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
    // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
  },
  displayName: {
    type: String,
    trim: true
  },
  municipality: {
    type: String
  }
});


const WorksnapsTimeEntry = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntrySchema);
const Student = mongoose.model('Student', StudentSchema);

WorksnapsTimeEntry.find()
  .populate('student')
  .exec((err, timeEntries) => {
    if (err) {
      console.log('Error:', err);
      return;
    }

    timeEntries.forEach((timeEntry) => {
      console.log(`${timeEntry.student.firstName} ${timeEntry.student.lastName}:`);
      console.log(timeEntry.timeEntries);
      console.log('---');
    });
  });
