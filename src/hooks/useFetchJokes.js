import { useState, useEffect } from "react";
import axios from "axios";

const useFetchJokes = () => {
    const [jokes, setJokes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        method: "GET",
        url: "https://dad-jokes.p.rapidapi.com/random/joke?count=5",
        headers: {
            "content-type": "application/octet-stream",
            "X-RapidAPI-Key":
                "ff78fa080cmsh581b7b157210d33p1b1fedjsnebd3d8eef49c",
            "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com"
        }
    };

    const fetchAllJokes = async () => {
        setIsLoading(true);

        const response = await axios.request(options);

        setJokes(response.data.body);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchAllJokes();
    }, []);

    return [jokes, isLoading, { fetchAllJokes }];
};

export default useFetchJokes;
