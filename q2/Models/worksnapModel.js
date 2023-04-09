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

const WorksnapsTimeEntry = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntrySchema);

module.exports=WorksnapsTimeEntry;