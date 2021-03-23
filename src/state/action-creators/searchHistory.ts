import { ActionTypes } from "../action-types";

export const removeFromSearchHistory = (query: string) => {
    return {
        type: ActionTypes.SEARCH_HISTORY_REMOVE,
        payload: query,
    };
};
