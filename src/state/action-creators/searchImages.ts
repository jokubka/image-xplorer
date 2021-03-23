import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const searchImages = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_HISTORY_ADD,
            payload: term,
        });

        dispatch({
            type: ActionTypes.SEARCH_IMAGES,
        });

        try {
            const { data } = await axios.get(
                "https://api.unsplash.com/search/photos",
                {
                    params: {
                        client_id: process.env.REACT_APP_API_KEY,
                        query: term,
                    },
                }
            );

            console.log(data);

            dispatch({
                type: ActionTypes.SEARCH_IMAGES_SUCCESS,
                payload: data.results,
            });
        } catch (error) {
            dispatch({
                type: ActionTypes.SEARCH_IMAGES_ERROR,
                payload: error.message,
            });
        }
    };
};
