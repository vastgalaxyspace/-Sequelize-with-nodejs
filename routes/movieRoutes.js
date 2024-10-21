const express = require('express');
const { getAllMovies, createMovie,findmovie } = require('../controllers/movieController');
const router = express.Router();

router.get('/movies', getAllMovies);
router.post('/movies', createMovie);
router.get('/findmovie',findmovie);

module.exports = router;
