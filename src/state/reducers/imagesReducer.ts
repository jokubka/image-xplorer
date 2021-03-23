import { Action } from "../actions";
import { ActionTypes } from "../action-types";

interface ImagesState {
    loading: boolean;
    error: null | string;
    data: any;
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

export const imagesReducer = (
    state: ImagesState = initialState,
    action: Action
): ImagesState => {
    switch (action.type) {
        case ActionTypes.SEARCH_IMAGES:
            return {
                loading: true,
                error: null,
                data: [],
            };
        case ActionTypes.SEARCH_IMAGES_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload,
            };
        case ActionTypes.SEARCH_IMAGES_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: [],
            };
        case ActionTypes.FETCH_RANDOM_IMAGES:
            return {
                loading: true,
                error: null,
                data: [],
            };
        case ActionTypes.FETCH_RANDOM_IMAGES_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload,
            };
        case ActionTypes.FETCH_RANDOM_IMAGES_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: [],
            };
        default:
            return state;
    }
};
