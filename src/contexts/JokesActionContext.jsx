import PropTypes from "prop-types";
import { createContext } from "react";

import { MOD_JOKES } from "@constants/jokesReducerConstants";
import { USER_JOKES } from "@constants/localStorageConstants";
import useJokesState from "@/hooks/useJokesState";

export const JokesActionContext = createContext(undefined);

export const JokesActionProvider = ({ children }) => {
    const { jokes, dispatch } = useJokesState();

    const addJoke = (joke) => {
        jokes.push(joke);
        dispatch({ type: MOD_JOKES, payload: { jokes } });
        localStorage.setItem(USER_JOKES, JSON.stringify(jokes));
    };

    const editJoke = (id, joke) => {
        const indexOfJoke = jokes.findIndex((joke) => joke._id === id);
        if (indexOfJoke !== -1) {
            jokes[indexOfJoke] = joke;

            dispatch({ type: MOD_JOKES, payload: { jokes } });
            localStorage.setItem(USER_JOKES, JSON.stringify(jokes));
        }
    };

    const deleteJoke = (id) => {
        const updatedJokesArray = jokes.filter((joke) => joke._id != id);
        dispatch({ type: MOD_JOKES, payload: { jokes: updatedJokesArray } });
        localStorage.setItem(USER_JOKES, JSON.stringify(updatedJokesArray));
    };

    const initValue = {
        addJoke,
        editJoke,
        deleteJoke
    };

    return (
        <JokesActionContext.Provider value={initValue}>
            {children}
        </JokesActionContext.Provider>
    );
};

JokesActionProvider.propTypes = {
    children: PropTypes.element
};
