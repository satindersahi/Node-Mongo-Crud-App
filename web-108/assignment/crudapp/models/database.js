var mongoose = require('mongoose');
mongoose.connect('mongodb://sp:sp3056@localhost:27017/EmployeesDB', {useNewUrlParser: true}, (err)=>{
  if (!err) {console.log ('MongoDB Connection Succeeded.') }
  else { console.log('error in DB connection : ' + err)}
});
// var conn = mongoose.connection;
// conn.on('connected', function() {
//     console.log('database is connected successfully');
// });
require('./employee.model');