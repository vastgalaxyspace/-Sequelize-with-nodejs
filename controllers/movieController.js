const { Movie } = require('../models');

// Get all movies
const getAllMovies = async (req, res) => {
  const movies = await Movie.findAll();
  res.json(movies);
};

// Create a new movie
const createMovie = async (req, res) => {
  const { title, genre, releaseYear } = req.body;
  const movie = await Movie.create({ title, genre, releaseYear });
  res.status(201).json(movie);
};

module.exports = { getAllMovies, createMovie };
