import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persisted } from "./reducers";
import { persistStore } from "redux-persist";

export const store = createStore(persisted, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
