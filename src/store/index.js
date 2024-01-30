import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "./auth/auth.api";
import authReducer from "./auth/auth.slice";
import { belvoApi } from "./belvo/belvo.api";

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
      [belvoApi.reducerPath]: belvoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware, belvoApi.middleware),
  });

export { default as useAuth } from "./auth/useAuth";
