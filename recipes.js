const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js');
const fs = require('fs');

const Recipe = require('./Recipe');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// --- CREAR ---
// Recipe.create({ title: 'Paella', cuisine: 'Spanish' })
// .then(result => {
//   console.log(result);
//   mongoose.connection.close();
// })
// .catch(err => console.log(err));

// --- INSERT ALL RECIPES ---
// Recipe.insertMany(data)
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

// --- UPDATE ---
// Recipe.update({ title: 'Rigatoni alla Genovese' }, { duration: 100 }, { new: true })
//   .then(result => {
//     console.log(result);
//     console.log('succes!');
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

// --- REMOVE ---
Recipe.deleteOne({ title: 'Carrot Cake' })
  .then(result => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

mongoose.connection.close();
