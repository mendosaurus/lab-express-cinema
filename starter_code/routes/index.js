const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movies.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/movie/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render("movie", { movie });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/add-new-movie", (req, res, next) => {
  res.render("movies/new", { newMovie });
});

router.post("/create-the-movie", (req, res, next) => {
  let theTitle = req.body.newTitle;
  let theDirector = req.body.newDirector;
  let theStars = req.body.newStars;
  let theImage = req.body.newImage;
  let theDescription = req.body.newDescription;
  let theShowtimes = req.body.newShowtimes;

  Movies.create({
    title: theTitle,
    director: theDirector,
    stars: theStars,
    image: theImage,
    description: theDescription,
    showtimes: theShowtimes
  })
    .then(response => {
      res.redirect("/movies");
    })
    .catch(error => {
      next(erorr);
    });
});

module.exports = router;
