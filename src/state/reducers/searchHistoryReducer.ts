import { ActionTypes } from "../action-types/index";
import { Action } from "../actions/index";

export const searchHistoryReducer = (state: string[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.SEARCH_HISTORY_ADD:
            if (!state.includes(action.payload)) {
                const maxLength = 5;
                const updatedState =
                    state.length >= maxLength
                        ? state.filter((_, i) => i !== 0)
                        : state;

                return [...updatedState, action.payload];
            }

            return state;

        case ActionTypes.SEARCH_HISTORY_REMOVE:
            const filteredHistory = state.filter(
                (query: string) => query !== action.payload
            );

            return [...filteredHistory];

        default:
            return state;
    }
};
