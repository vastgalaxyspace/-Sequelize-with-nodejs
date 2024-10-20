const express = require('express');
const { getAllMovies, createMovie } = require('../controllers/movieController');
const router = express.Router();

router.get('/movies', getAllMovies);
router.post('/movies', createMovie);

module.exports = router;
