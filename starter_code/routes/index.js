const express = require('express');
const router = express.Router();
const MovieModel = require("./../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  MovieModel.find()
    .then(dbRes => {
      res.render('movies', { movies: dbRes });
      console.log("All movies are found!")
    })
    .catch(dbErr => {
      console.log(dbErr)
    })
});

router.get('/movie/:id', (req, res) => {
  let bob;
  MovieModel.findOne({"_id":req.params.id})
    .then(dbRes => {
      console.log(`movie found : ${dbRes.title}`)
      res.render('movie', {movie : dbRes});
    })
    .catch(dbErr => {
      console.log(dbErr)
    })
});



module.exports = router;