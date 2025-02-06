import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { thunk } from "redux-thunk";
import rootReducer from "./reducers"; // Import your combined reducers
import AxiosService from "./middleware/axiosServies";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["auth"], // Only persist auth reducer
};

const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, AxiosService)
);

export const persistor = persistStore(store);
