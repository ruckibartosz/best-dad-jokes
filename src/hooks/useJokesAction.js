import { useContext } from "react";
import { JokesActionContext } from "@contexts/JokesActionContext";

const useJokesAction = () => {
    const { addJoke, editJoke, deleteJoke } = useContext(JokesActionContext);

    if (!addJoke || !editJoke || !deleteJoke)
        throw new Error("Component beyond JokesActionContext!");

    return { addJoke, editJoke, deleteJoke };
};

export default useJokesAction;
