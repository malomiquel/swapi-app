import {
  createBrowserRouter
} from "react-router-dom";

import './index.css'

import { AppDispatch, store } from "./redux/store";
import { getFilms } from "./redux/slices/filmsSlice";
import { getVehicles } from "./redux/slices/vehiclesSlice";
import { getCharacters } from "./redux/slices/charactersSlice";
import { getPlanets } from "./redux/slices/planetsSlice";
import { getSpecies } from "./redux/slices/speciesSlice";
import { getStarships } from "./redux/slices/starshipsSlice";
import PageLayout from "./components/layoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        lazy: async () => ({
          Component: (await import("@/pages/home/homePage")).default,
        }),
        loader: async () => {
          const dispatch = store.dispatch as AppDispatch;
          await dispatch(getFilms());
          return null;
        },
      },
      {
        path: "/films",
        lazy: async () => ({
          Component: (await import("@/pages/film/filmPage")).default,
        }),
        loader: async () => {
          const dispatch = store.dispatch as AppDispatch;
          await dispatch(getFilms());
          return null;
        },
      },
      {
        path: "/films/:id",
        lazy: async () => ({
          Component: (await import("@/pages/film/filmDetails")).default,
        }),
      },
      {
        path: "/vehicles",
        lazy: async () => ({
          Component: (await import("@/pages/vehicle/vehiclePage")).default,
        }),
        loader: async () => {
          const dispatch = store.dispatch as AppDispatch;
          await dispatch(getVehicles());
          return null;
        },
      },
      {
        path: "/vehicles/:id",
        lazy: async () => ({
          Component: (await import("@/pages/vehicle/vehicleDetails")).default,
        }),
      },
      {
        path: "/people",
        lazy: async () => ({
          Component: (await import("@/pages/character/characterPage")).default,
        }),
        loader: async () => {
          const dispatch = store.dispatch as AppDispatch;
          await dispatch(getCharacters());
          return null;
        },
      },
      {
        path: "/people/:id",
        lazy: async () => ({
          Component: (await import("@/pages/character/characterDetails")).default,
        }),
      },
      {
        path: "/planets",
        lazy: async () => ({
          Component: (await import("@/pages/planet/planetPage")).default,
        }),
        loader: async () => {
          const dispatch = store.dispatch as AppDispatch;
          await dispatch(getPlanets());
          return null;
        },
      },
      {
        path: "/planets/:id",
        lazy: async () => ({
          Component: (await import("@/pages/planet/planetDetails")).default,
        }),
      },
      {
        path: "/species",
        lazy: async () => ({
          Component: (await import("@/pages/species/speciesPage")).default,
        }),
        loader: async () => {
          const dispatch = store.dispatch as AppDispatch;
          await dispatch(getSpecies());
          return null;
        },
      },
      {
        path: "/species/:id",
        lazy: async () => ({
          Component: (await import("@/pages/species/speciesDetails")).default,
        }),
      },
      {
        path: "/starships",
        lazy: async () => ({
          Component: (await import("@/pages/starship/starshipPage")).default,
        }),
        loader: async () => {
          const dispatch = store.dispatch as AppDispatch;
          await dispatch(getStarships());
          return null;
        },
      },
      {
        path: "/starships/:id",
        lazy: async () => ({
          Component: (await import("@/pages/starship/starshipDetails")).default,
        }),
      }]
  },
  {
    path: "/404",
    lazy: async () => ({
      Component: (await import("@/pages/notFound/notFoundPage")).default,
    }),
  },
  {
    path: "*",
    lazy: async () => ({
      Component: (await import("@/pages/notFound/notFoundPage")).default,
    }),
  },
]);
