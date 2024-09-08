import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import filmsReducer from "./slices/filmsSlice";
import vehiclesReducer from "./slices/vehiclesSlice";
import charactersReducer from "./slices/charactersSlice";
import planetsReducer from "./slices/planetsSlice";
import speciesReducer from "./slices/speciesSlice";
import starshipsReducer from "./slices/starshipsSlice";

export const rootReducer = combineReducers({
  filmsStore: filmsReducer,
  vehiclesStore: vehiclesReducer,
  charactersStore: charactersReducer,
  planetsStore: planetsReducer,
  speciesStore: speciesReducer,
  starshipsStore: starshipsReducer,
})

const persistConfig = {
  key: "root",
  whitelist: [
    "filmsStore",
    "vehiclesStore",
    "charactersStore",
    "planetsStore",
    "speciesStore",
    "starshipsStore"
  ],
  storage: localStorage,
  timeout: 10000,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch