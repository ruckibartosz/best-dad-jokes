import PropTypes from "prop-types";

import { createContext } from "react";
import { useJokesReducer } from "@reducers/useJokesReducer";

export const JokesStateContext = createContext(undefined);

export const JokesStateProvider = ({ children }) => {
    const [{ jokes, initialized }, dispatch] = useJokesReducer();

    return (
        <JokesStateContext.Provider value={{ jokes, initialized, dispatch }}>
            {children}
        </JokesStateContext.Provider>
    );
};

JokesStateProvider.propTypes = {
    children: PropTypes.element
};
