import { ActionTypes } from "../action-types";

interface SearchImagesAction {
    type: ActionTypes.SEARCH_IMAGES;
}

interface SearchImagesSuccessAction {
    type: ActionTypes.SEARCH_IMAGES_SUCCESS;
    payload: any;
}

interface SearchImagesErrorAction {
    type: ActionTypes.SEARCH_IMAGES_ERROR;
    payload: string;
}

interface FetchRandomImagesAction {
    type: ActionTypes.FETCH_RANDOM_IMAGES;
}

interface FetchRandomImagesSuccessAction {
    type: ActionTypes.FETCH_RANDOM_IMAGES_SUCCESS;
    payload: any;
}

interface FetchRandomImagesErrorAction {
    type: ActionTypes.FETCH_RANDOM_IMAGES_ERROR;
    payload: string;
}

interface SearchHistoryAddAction {
    type: ActionTypes.SEARCH_HISTORY_ADD;
    payload: string;
}

interface SearchHistoryRemoveAction {
    type: ActionTypes.SEARCH_HISTORY_REMOVE;
    payload: string;
}

export type Action =
    | SearchImagesAction
    | SearchImagesSuccessAction
    | SearchImagesErrorAction
    | FetchRandomImagesAction
    | FetchRandomImagesSuccessAction
    | FetchRandomImagesErrorAction
    | SearchHistoryAddAction
    | SearchHistoryRemoveAction;
