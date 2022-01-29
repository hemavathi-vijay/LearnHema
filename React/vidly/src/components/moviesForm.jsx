import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { useParams } from "react-router-dom";

class MoviesForm extends Form {
  state = {
    genres: [],
    data: {
      _id: "new",
      title: "",
      genreId: "",
      numberInStock: 0,
      dailyRentalRate: 0,
    },
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Movie Name"),
    numberInStock: Joi.number()
      .positive()
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .positive()
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };
  componentDidMount() {
    const genres = [...getGenres()];
    this.setState({ genres });
    const movieId = this.props.id;
    if (movieId === "new") return;
    /*
    const movie = getMovie(movieId);
    //if (!movie) return this.props.history.replace("/notFound");
    this.setState({ data: this.mapToViewModel(movie) });*/
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = (movie) => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    const genres = [...getGenres()];

    console.log(
      "this.state.genres : ",
      this.state.genres,
      " this.props.id : ",
      this.value
    );
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.doSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", {
            options: getGenres(),
          })}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MoviesForm;
