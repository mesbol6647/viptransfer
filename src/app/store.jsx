import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import carReducer from "../features/carSlice";
import{ 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  } from "redux-persist";
// import storage from "redux-persist/lib/storage" //?localstorage
import storage from "redux-persist/lib/storage/session" //?sessionstorage


const persistConfig = {
  key: "root",
  storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    car: carReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor= persistStore(store)
export default store;
