import { useEffect, useReducer } from "react";

import { INIT_USER_JOKES, MOD_JOKES } from "@constants/jokesReducerConstants";
import { USER_JOKES } from "@constants/localStorageConstants";

export const useJokesReducer = () => {
    const JokesReducer = (state, action) => {
        switch (action.type) {
            case INIT_USER_JOKES: {
                const { jokes, initialized } = action.payload;
                return { ...state, jokes, initialized };
            }

            case MOD_JOKES: {
                const { jokes } = action.payload;
                return { ...state, jokes };
            }
        }
    };

    const initValues = {
        jokes: [],
        initialized: false
    };

    const [state, dispatch] = useReducer(JokesReducer, initValues);

    useEffect(() => {
        const jokes = JSON.parse(localStorage.getItem(USER_JOKES));
        if (jokes) {
            dispatch({
                type: INIT_USER_JOKES,
                payload: { jokes, initialized: true }
            });
        }
    }, []);

    return [state, dispatch];
};
