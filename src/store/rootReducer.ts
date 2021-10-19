import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { themeReducer } from "./theme";
import { themesReducer } from "./themes";

export const rootReducer = combineReducers({
  theme: themeReducer,
  themes: themesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
