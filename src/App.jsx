import { useState } from "react";
import {
    AiOutlineUnorderedList,
    AiFillStar,
    AiOutlinePlus
} from "react-icons/ai";
import { MdOutlineRefresh } from "react-icons/md";

import { Tabs } from "@components/Tabs";
import Button from "@components/Button";
import JokeModal from "@components/JokeModal";
import DisplayJokes from "@components/DisplayJokes";
import useJokesAction from "@hooks/useJokesAction";
import LoadingSpinner from "@components/LoadingSpinner";
import useJokesState from "@hooks/useJokesState";
import useFetchJokes from "@hooks/useFetchJokes";

import "./App.css";

function App() {
    const [activeTab, setActiveTab] = useState("all-jokes");
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [setup, setSetup] = useState("");
    const [punchline, setPunchline] = useState("");
    const [jokeId, setJokeId] = useState("");
    const [allJokes, isLoading, { fetchAllJokes }] = useFetchJokes();
    const { addJoke, deleteJoke } = useJokesAction();
    const { jokes } = useJokesState();

    const handleOnAllJokesClick = () => setActiveTab("all-jokes");
    const handleOnMyJokesClick = () => setActiveTab("user-jokes");
    const handleOnLikeClick = (joke) => addJoke(joke);
    const handleOnRefreshClick = () => fetchAllJokes();
    const handleOnDeleteClick = ({ _id }) => deleteJoke(_id);

    const handleOnCreateJokeClick = () => {
        setSetup("");
        setPunchline("");
        setJokeId("");
        setIsActiveModal(true);
    };
    const handleOnEditJokeClick = (id) => {
        const editJoke = jokes.find((joke) => joke._id === id);
        const {
            setup: editJokeSetup,
            punchline: editJokePunchline,
            _id: editId
        } = editJoke;
        setSetup(editJokeSetup);
        setPunchline(editJokePunchline);
        setJokeId(editId);
        setIsActiveModal(true);
    };

    return (
        <div className="page__container">
            <h1 className="page__heading">Best dad jokes!</h1>
            <h3 className="page__subHeading">You can ask your dad c:</h3>
            <div className="page__context">
                <div className="page__tabs-buttons">
                    <Button
                        className={activeTab === "all-jokes" && "active"}
                        text="All jokes"
                        icon={<AiOutlineUnorderedList size={18} />}
                        onClick={handleOnAllJokesClick}
                    />
                    <Button
                        className={activeTab === "user-jokes" && "active"}
                        text="My jokes"
                        icon={<AiFillStar size={18} />}
                        onClick={handleOnMyJokesClick}
                    />
                </div>
                <div className="jokes__context">
                    <Tabs.Container>
                        <Tabs.Panel id="all-jokes" activeTab={activeTab}>
                            <Button
                                onClick={handleOnRefreshClick}
                                text="Refresh"
                                icon={<MdOutlineRefresh />}
                                size={22}
                            />

                            {isLoading ? (
                                <LoadingSpinner />
                            ) : (
                                <DisplayJokes
                                    jokes={allJokes}
                                    onLikeJokeClick={handleOnLikeClick}
                                />
                            )}
                        </Tabs.Panel>
                        <Tabs.Panel id="user-jokes" activeTab={activeTab}>
                            <Button
                                onClick={handleOnCreateJokeClick}
                                text="Create joke"
                                icon={<AiOutlinePlus size={18} />}
                            />
                            <DisplayJokes
                                jokes={[...jokes].reverse()}
                                onDeleteJokeClick={handleOnDeleteClick}
                                onEditJokeClick={handleOnEditJokeClick}
                                showControls
                            />
                        </Tabs.Panel>
                    </Tabs.Container>
                </div>
            </div>
            <JokeModal
                jokeId={jokeId}
                setupVal={setup}
                setupSetter={setSetup}
                punchlineVal={punchline}
                punchlineSetter={setPunchline}
                isActive={isActiveModal}
                isActiveSetter={setIsActiveModal}
            />
        </div>
    );
}

export default App;
