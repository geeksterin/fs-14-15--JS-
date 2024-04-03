import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from "./pages/Movie";
import { TvShow } from "./pages/TvShow";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/movies",
    Component: Movie,
  },
  {
    path: "/tv-shows",
    Component: TvShow,
  },
  {
    path: "/movie/:id",
    Component: MovieDetails,
  },
  {
    path: "/search/:movie",
    Component: Search,
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
