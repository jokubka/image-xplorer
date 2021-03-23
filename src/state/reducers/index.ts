import { combineReducers } from "redux";
import { imagesReducer } from "./imagesReducer";
import { searchHistoryReducer } from "./searchHistoryReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["images"],
};

export const rootReducer = combineReducers({
    images: imagesReducer,
    searchHistory: searchHistoryReducer,
});

export const persisted = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
