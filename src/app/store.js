import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../Services/TMDB";

export default configureStore({
  reducer: { [tmdbApi.reducerPath]: tmdbApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
