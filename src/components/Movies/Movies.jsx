import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../Services/TMDB";
import MovieList from "../MovieList/MovieList";

const movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No matches found. <br /> Try something else.
        </Typography>
      </Box>
    );
  }

  if (error) return "An error occurred.";

  return (
    <div>
      <h1>
        <MovieList movies={data} />
      </h1>
    </div>
  );
};

export default movies;
