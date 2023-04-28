import { useContext } from "react";
import { JokesStateContext } from "@contexts/JokesStateContext";

const useJokesState = () => {
    const jokesStateCtx = useContext(JokesStateContext);

    if (!jokesStateCtx) throw new Error("Component beyond JokesStateContext!");

    return { ...jokesStateCtx };
};

export default useJokesState;
