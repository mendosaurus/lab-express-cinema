const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  // write schema
  // title:{type:String}, // this is regular way to write schema
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model("Movie", movieSchema);
// name of the model should ALWAYS be capitalized and ALWAYS be singular
// this will create a collection called 'movie'

module.exports = Movie;
