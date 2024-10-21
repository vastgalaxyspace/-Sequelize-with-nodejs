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

const findmovie=async(req,res)=>{
  try{const{title}=req.body;
  const movie=await Movie.findOne({where:{title}});

  if(movie){
    res.json(movie);
  }else{
    res.status(404).json({  error:"movie is not found"});
  }}
  catch(err){
    console.log(err);
  }

}

module.exports = { getAllMovies, createMovie,findmovie };
