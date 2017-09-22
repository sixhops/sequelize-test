var db = require('./models');

// This is how you create a record
// Similar to INSERT INTO...
db.user.create({
  firstName: 'The',
  lastName: 'Viper',
  age: 13,
  email: 'viper-nospamdotcom'
}).then(function(data) {
  console.log(data);
});

// This is how you find a record
// Similar to SELECT * FROM table WHERE...
db.user.find({
  where: {firstName: 'Steve'}
}).then(function(user) {
  // console.log(user);
});

// This is how you get all records in a table
// Similar to SELECT * FROM table
db.user.findAll().then(function(users) {
  // console.log(users);
});

// Special method to do one of the following:
//  1. Find the record with the matching WHERE data
//  2. Create the record using the defaults if the record can't be found
db.user.findOrCreate({
  where: {
    firstName: 'Brian',
    lastName: 'Hague'
  },
  defaults: { age: 88 }
}).spread(function(user, created) {
  console.log(user);
});

// This method updates records
// Similar to UPDATE ... WHERE ...
db.user.update({
  lastName: 'Taco'
}, {
  where: { firstName: 'Brian' }
}).then(function(user) {
  console.log(user);
});

// This method deletes data
// Similar to DELETE FROM...
db.user.destroy({
  where: {firstName: 'Brian'}
}).then(function() {
  // do something really cool
});
