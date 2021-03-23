import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export const fetchRandomImages = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.FETCH_RANDOM_IMAGES,
        });

        try {
            const { data } = await axios.get(
                "https://api.unsplash.com/photos/random",
                {
                    params: {
                        client_id: process.env.REACT_APP_API_KEY,
                        count: 20,
                    },
                }
            );

            dispatch({
                type: ActionTypes.FETCH_RANDOM_IMAGES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ActionTypes.FETCH_RANDOM_IMAGES_ERROR,
                payload: error.message,
            });
        }
    };
};
